import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { Stars, OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Planet, SunObject } from "./Planets/Earth.jsx"

const Planets = [
    {name: "Sun", place: "Home", texture: "/Sun.jpg", size: 2.7, position: [2, 0, 0], CameraPosition: [0, 0, 5]},
    {name: "Mercury", place: "About", texture: "/Mercury.jpg", size: 1.9, position: [-10, 0, -16], CameraPosition: [-6.5, 0, -11]},
    {name: "Venus", place: "Projects", texture: "/Venus.jpg", size: 1.7, position: [-60, 0, -50], CameraPosition: [-64, 0, -45]},
    {name: "Earth", place: "Skills", texture: "/Earth.jpg", size: 2.1, position: [-30, 0, -60], CameraPosition: [-32, 0, -55]},
    {name: "Mars", place: "Skills", texture: "/Mars.jpg", size: 2, position: [-80, 0, -70], CameraPosition: [-82, 0, -65]},
]

let Sun = Planets[0]
let Mercury = Planets[1]
let Venus = Planets[2]
let Earth = Planets[3]
let Mars = Planets[4]

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

    if (Place === "Education") {
        target = Jupiter.CameraPosition
    }

    useFrame(() => {
        camera.position.lerp(
            new THREE.Vector3(...target),
            0.05
        );
    });

    return null;
}

export default function SpaceScene({Place}) {
    //This prop imports the planets and places them on a canvas with lighting 
    return (
        <Canvas >
            {/* Color and lighting */}
            <ambientLight intensity={0.01} />

            <Stars
                radius={140}
                depth={50}
                count={6000}
                factor={4}
                saturation={0}
                fade
                speed={1}
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
            speed={0.004}
            />

            <Planet
            size={Venus.size}
            position={Venus.position}
            textureurl={Venus.texture}
            speed={0.004}
            />

            <Planet
            size={Earth.size}
            position={Earth.position}
            textureurl={Earth.texture}
            speed={0.004}
            />

            <Planet
            size={Mars.size}
            position={Mars.position}
            textureurl={Mars.texture}
            speed={0.004}
            />

           
        </Canvas>
  );
}   