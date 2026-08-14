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
            <pointLight 
            position={[position[0] + 2, position[1] + 2, position[2] + 3]}
            intensity={19} />
            <mesh ref={PlanetRef} 
            position = {position}>

                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial
                map={texture} />
                
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

