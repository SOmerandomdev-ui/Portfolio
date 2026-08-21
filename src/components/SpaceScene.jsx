import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { Stars, OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Planet, SunObject } from "./Planets/Earth.jsx"

//[-10, 2, -4]
const Planets = [
    {name: "Sun", place: "Home", texture: "/Sun.jpg", size: 5, position: [0, 0, 0], CameraPosition: [0, 100, 0]},
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

function CameraController({ Place }) {
    /* Pull the camera from useThree which returns an object that has information of the current environment  */
    const { camera } = useThree();
    let target;

    {/* Camera change conditions */}
    if (Place === "Home") {
        target = Sun.CameraPosition
    }

    if (Place === "About") {
        target = Mercury.CameraPosition
    }

    if (Place === "Projects") {
        target = Venus.CameraPosition
    }

    if (Place === "Skills") {
        target = Earth.CameraPosition
    }

    if (Place === "Education") {
        target = Mars.CameraPosition
    }

    if (Place === "Contact") {
        target = Jupiter.CameraPosition
    }

    useFrame(() => {
        camera.position.lerp(
            new THREE.Vector3(...target),
            0.05
        );
        //camera.lookAt(10000, 0, 0);
        camera.lookAt(0, 0, 0);
    });

    
    return null;
}

export default function SpaceScene({Place}) {
    //This prop imports the planets and places them on a canvas with lighting 
    return (
        <Canvas >
            {/* Color and lighting */}
            <ambientLight intensity={2} />

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

            <CameraController Place={Place}/>

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
            position={Mercury.position}
            textureurl={Mercury.texture}
            speedx={0.004}
            />

            <Planet
            size={Venus.size}
            position={Venus.position}
            textureurl={Venus.texture}
            speedx={0.004}
            />

            <Planet
            size={Earth.size}
            position={Earth.position}
            textureurl={Earth.texture}
            speedx={0.004}
            speedy={0.005}
            />

            <Planet
            size={Mars.size}
            position={Mars.position}
            textureurl={Mars.texture}
            speedx={0.004}
            />

            <Planet
            size={Jupiter.size}
            position={Jupiter.position}
            textureurl={Jupiter.texture}
            speedx={0.004}
            />

        </Canvas>
  );
}   