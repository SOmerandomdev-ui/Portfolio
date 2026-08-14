import { Canvas } from "@react-three/fiber";
import { Texture, useTexture } from "@react-three/drei";
import { useRef } from "react"
import { useFrame } from "@react-three/fiber";


export function Planet({position, textureurl, speed, size}) {
    //load textures from three.js 
    const texture = useTexture(textureurl);
    const PlanetRef = useRef(null)

    //Makes the planet spin 
    useFrame((state, delta) => {
        PlanetRef.current.rotation.y += speed;
        PlanetRef.current.rotation.z += speed/2;
    });

    return (
        //Prop that makes a sphere and colors it 
        <>
            <mesh ref={PlanetRef} 
            position = {position}>
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial 
                map={texture} />
            </mesh>
        </>
        
    );
}

export function SunObject({ position, color, speed, size }) {
    const sunRef = useRef();

    useFrame(() => {
        sunRef.current.rotation.y += speed;
    });

    return (
        <mesh
            ref={sunRef}
            position={position}>

            <icosahedronGeometry args={[size, 15]} />

            <meshBasicMaterial
                color={color}
            />
        </mesh>
    );
}