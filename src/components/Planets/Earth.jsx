import { Canvas } from "@react-three/fiber";
import { Texture, useTexture } from "@react-three/drei";
import { useRef } from "react"
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";


export function Planet({position, textureurl, speedx, speedy = 0, size, anglechange = 0.05, otherref}) {
    //load textures from three.js 
    const texture = useTexture(textureurl);
    const PlanetRef = otherref ?? useRef(null)
    let angle1 = useRef(0);
    let angle2 = useRef(0.3)

    //Makes the planet spin 
    useFrame((state, delta) => {
        PlanetRef.current.rotation.y += speedx;
        PlanetRef.current.rotation.z += speedy;
        angle1.current += 0.5 * anglechange
        PlanetRef.current.position.x = Math.cos(angle1.current) * Math.sqrt(position[0] ** 2 + position[2] ** 2);
        PlanetRef.current.position.z = Math.sin(angle1.current) * Math.sqrt(position[0] ** 2 + position[2] ** 2);
    });

    return (
        //Prop that makes a sphere and colors it 
        <>
            <pointLight 
                position={[position[0] + 2, position[1] + 2, position[2] + 3]}
                intensity={19} />

            <mesh ref={PlanetRef} 
                position = {position}>
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial
                map={texture} />
            </mesh>

            <mesh 
            position = {[0, 0, 0]}
            rotation = {[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[position[0] - 0.1, position[0] + 0.1, 64]} />
                 <meshBasicMaterial
                    color="white"
                    side={THREE.DoubleSide}
                    transparent
                    opacity={0.6}
                 />
            </mesh>
        </>
        
    );
}

//wont use probably
export function SunObject({position, textureurl, speed, size}) {
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
                <meshBasicMaterial
                map={texture} />
                
            </mesh>
        </>
        
    );
}
 
