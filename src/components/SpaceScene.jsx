import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { Stars, OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Planet, SunObject } from "./Planets/Earth.jsx"

//[-10, 0, -4]
const Planets = [
    {name: "Sun", place: "Home", texture: "/Sun.jpg", size: 5, position: [0, 0, 0], CameraPosition: [-10, 0, -5]},
    {name: "Mercury", place: "About", texture: "/Mercury.jpg", size: 1.9, position: [30, 0, 0]},
    {name: "Venus", place: "Projects", texture: "/Venus.jpg", size: 1.7, position: [55.4, 0, 0]},
    {name: "Earth", place: "Skills", texture: "/Earth.jpg", size: 2.1, position: [76.9, 0, 0]},
    {name: "Mars", place: "Education", texture: "/Mars.jpg", size: 2, position: [116.9, 0, 0]},
    {name: "Jupiter", place: "Contact", texture: "/Jupiter.jpg", size: 4, position: [0, 2000, 0]},
]

let Sun = Planets[0]
let Mercury = Planets[1]
let Venus = Planets[2]
let Earth = Planets[3]
let Mars = Planets[4]
let Jupiter = Planets[5]

function CameraController({ Place, Refs, Jump, ChangeJump}) {
    const { camera } = useThree();
    let CameraView = new THREE.Vector3(0,0,0)
    let target;

    useFrame((state, delta) => {
       if (Place === "Home") {
        target = new THREE.Vector3(...Sun.CameraPosition);
        }

        else if (Place === "About" && Refs.MercuryRef.current) {
            const position = Refs.MercuryRef.current.position;
            target = new THREE.Vector3(position.x - 10, 0, position.z + 8.5)
            CameraView = target
             camera.lookAt(10000, 0, 0);
        }

        if (Place === "Projects") {
            const position = Refs.VenusRef.current.position;
            target = new THREE.Vector3(position.x - 15, 0, position.z + 5)
            
             camera.lookAt(10000, 0, 0);
        }

        if (Place === "Skills") {
            const position = Refs.EarthRef.current.position;
            target = new THREE.Vector3(position.x - 15, 0, position.z - 10)
            CameraView = target
            camera.lookAt(10000, 0, 0);
        }

        if (Place === "Education") {
            const position = Refs.MarsRef.current.position;
            target = new THREE.Vector3(position.x - 10, 0, position.z - 7)
            CameraView = target
             camera.lookAt(10000, 0, 0);
        }

        if (Place === "Contact") {
            const position = Refs.JupiterRef.current.position;
            target = new THREE.Vector3(0, 120, 0)
        }
        const distance = camera.position.distanceTo(target);
        
        if (Place === "Contact") {
            const posAlpha = 1 - Math.exp(-1.2 * delta);
            if (distance > 0.05) {
                camera.position.lerp(target, posAlpha);
            } else {
                camera.position.copy(target);
            }

            const dummy = camera.clone();
            dummy.position.copy(camera.position);
            dummy.lookAt(0, 0, 0);
            const rotAlpha = 1 - Math.exp(-3 * delta);

            camera.quaternion.slerp(dummy.quaternion, rotAlpha);
        } else if (distance > 5) {
            camera.position.lerp(target, 0.12);
        } else {
            camera.position.copy(target);
        }   
            
    });

    return null;
}

export default function SpaceScene({Place, Jump, ChangeJump}) {
    //This prop imports the planets and places them on a canvas with lighting 
    const MercuryRef = useRef(null)
    const VenusRef = useRef(null)
    const EarthRef = useRef(null)
    const MarsRef = useRef(null)
    const JupiterRef = useRef(null)
    
    return (
        <Canvas >
            {/* Color and lighting */}
            <ambientLight intensity={0.1} />
            <directionalLight 
            position={[5, 20, 30]}   
            intensity={1.5}
         />

            <Stars
                radius={250}
                depth={80}
                count={6000}
                factor={4}
                saturation={0}
                fade
                speed={2}
            />
            
            <color attach="background" args={["#000107"]} />

            <CameraController Place={Place}
            Refs={{MercuryRef, VenusRef, EarthRef, MarsRef, JupiterRef}}
            Jump={Jump}
            ChangeJump={ChangeJump}/>

            {/* All of the planets */}
            
            <SunObject
            size={Sun.size}
            position={Sun.position}
            textureurl={Sun.texture}
            speed={0.001}
            />
            <EffectComposer>
                <Bloom
                    intensity={1.2}
                    luminanceThreshold={0.3}
                    luminanceSmoothing={0.2}
                    mipmapBlur
                />
            </EffectComposer>

            <Planet
            size={Mercury.size}
            anglechange={0.04}
            position={Mercury.position}
            textureurl={Mercury.texture}
            otherref={MercuryRef}
            speedx={0.004}
            />

            <Planet
            size={Venus.size}
            anglechange={0.03}
            position={Venus.position}
            textureurl={Venus.texture}
            otherref={VenusRef}
            speedx={0.004}
            />

            <Planet
            size={Earth.size}
            anglechange={0.02}
            position={Earth.position}
            textureurl={Earth.texture}
            otherref={EarthRef}
            speedx={0.004}
            speedy={0.005}
            />

            <Planet
            size={Mars.size}
            anglechange={0.01}
            position={Mars.position}
            textureurl={Mars.texture}
            otherref={MarsRef}
            speedx={0.004}
            />

            <Planet
            size={Jupiter.size}
            anglechange={0.005}
            position={Jupiter.position}
            textureurl={Jupiter.texture}
            otherref={JupiterRef}
            speedx={0.004}
            />

        </Canvas>
  );
}   