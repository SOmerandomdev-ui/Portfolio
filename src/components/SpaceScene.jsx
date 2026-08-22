import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { Stars, OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Planet, SunObject } from "./Planets/Earth.jsx"

//[-10, 0, -4]
const Planets = [
    {name: "Sun", place: "Home", texture: "/Sun.jpg", size: 5, position: [0, 0, 0], CameraPosition: [0, 180, 0]},
    {name: "Mercury", place: "About", texture: "/Mercury.jpg", size: 1.9, position: [30, 0, 0], CameraPosition: [20, 0, 8.5]},
    {name: "Venus", place: "Projects", texture: "/Venus.jpg", size: 1.7, position: [55.4, 0, 0], CameraPosition: [44.4, 0, 0]},
    {name: "Earth", place: "Education", texture: "/Earth.jpg", size: 2.1, position: [76.9, 0, 0], CameraPosition: [66.9, 0, 0]},
    {name: "Mars", place: "Skills", texture: "/Mars.jpg", size: 2, position: [116.9, 0, 0], CameraPosition: [106.9, 0, -7]},
    {name: "Jupiter", place: "Contact", texture: "/Jupiter.jpg", size: 4, position: [200, 0, 0], CameraPosition: [190, 0, 7]},
]

let Sun = Planets[0]
let Mercury = Planets[1]
let Venus = Planets[2]
let Earth = Planets[3]
let Mars = Planets[4]
let Jupiter = Planets[5]

function CameraController({ Place, Refs, Jump, ChangeJump}) {
    /* Pull the camera from useThree which returns an object that has information of the current environment  */
    const { camera } = useThree();
    let target;

    {/* Camera change conditions */}
    useFrame(() => {
       if (Place === "Home") {
        target = new THREE.Vector3(...Sun.CameraPosition);
        }

        else if (Place === "About" && Refs.MercuryRef.current) {
            const position = Refs.MercuryRef.current.position;
            target = new THREE.Vector3(position.x - 10, 0, position.z + 8.5)
        }

        if (Place === "Projects") {
            const position = Refs.VenusRef.current.position;
            target = new THREE.Vector3(position.x - 10, 0, position.z + 10)
        }

        if (Place === "Skills") {
            const position = Refs.EarthRef.current.position;
            target = new THREE.Vector3(position.x - 10, 0, position.z - 10)
        }

        if (Place === "Education") {
            const position = Refs.MarsRef.current.position;
            target = new THREE.Vector3(position.x - 10, 0, position.z - 10)
        }

        if (Place === "Contact") {
            const position = Refs.JupiterRef.current.position;
            target = new THREE.Vector3(position.x - 10, 0, position.z + 5.5)
        }
        const distance = camera.position.distanceTo(target);
        if (distance > 20) {
            camera.position.lerp(target, 0.05);
        } else {
            camera.position.copy(target);
}

        camera.lookAt(10000, 0, 0);
        //camera.lookAt(0, 0, 0);
            
    });

    useEffect(() => {
        if (Jump) {
            const timer = setTimeout(() => {
                ChangeJump(false);
            }, 3000); 

            return () => clearTimeout(timer); 
        }
    }, [Jump]);

    
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
            <ambientLight intensity={0.2} />

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