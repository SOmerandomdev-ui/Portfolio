import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Suspense, memo, useMemo, useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Planet, SunObject } from "./Planets/Earth.jsx"

function VisibilityController() {
    const { invalidate, clock } = useThree();
    const [visible, setVisible] = useState(!document.hidden);

    useEffect(() => {
        const onChange = () => {
            const isVisible = !document.hidden;
            setVisible(isVisible);
            if (isVisible) {
                invalidate();
            }
        };
        document.addEventListener("visibilitychange", onChange);
        return () => document.removeEventListener("visibilitychange", onChange);
    }, [invalidate]);

    useFrame(() => {
        if (!visible) {
            clock.stop();
        } else if (!clock.running) {
            clock.start();
        }
    });

    return null;
}

const Planets = [
    {name: "Space", place: "Space", position: [0, 320, 0]},
    {name: "Sun", place: "Home", texture: "/Sun.jpg", size: 5, position: [0, 0, 0], CameraPosition: [-10, 0, 5.5]},
    {name: "Mercury", place: "About", texture: "/Mercury.jpg", size: 1.9, position: [30, 0, 0]},
    {name: "Venus", place: "Projects", texture: "/Venus.jpg", size: 1.7, position: [55.4, 0, 0]},
    {name: "Earth", place: "Skills", texture: "/Earth.jpg", size: 2.1, position: [76.9, 0, 0]},
    {name: "Mars", place: "Education", texture: "/Mars.jpg", size: 2, position: [116.9, 0, 0]},
    {name: "Jupiter", place: "Contact", texture: "/Jupiter.jpg", size: 4, position: [170, 0, 0]},
    {name: "Saturn", texture: "/Saturn.jpg", size: 3.8, position: [240, 0, 0]},
    {name: "Uranus", texture: "/Uranus.jpg", size: 3.1, position: [310, 0, 0]},
    {name: "Neptune", texture: "/Neptune.jpg", size: 2.8, position: [400, 0, 0]}
]

const Space = Planets[0]
const Sun = Planets[1];
const Mercury = Planets[2];
const Venus = Planets[3];
const Earth = Planets[4];
const Mars = Planets[5];
const Jupiter = Planets[6];
const Saturn = Planets[7]
const Uranus = Planets[8]
const Neptune = Planets[9]

// Scratch objects reused every frame; avoids per-frame Vector3/camera allocations.
const SPACE_TARGET = new THREE.Vector3(...Space.position);
const SUN_CAMERA_TARGET = new THREE.Vector3(...Sun.CameraPosition);
const FAR_X = new THREE.Vector3(10000, 0, 0);
const ORIGIN = new THREE.Vector3(0, 0, 0);
const scratchTarget = new THREE.Vector3();
const scratchMatrix = new THREE.Matrix4();
const scratchQuat = new THREE.Quaternion();

// Computes the quaternion the camera would have if it looked at `lookTarget`
// from its current position, without cloning the camera.
function lookAtQuaternion(camera, lookTarget, out) {
    scratchMatrix.lookAt(camera.position, lookTarget, camera.up);
    return out.setFromRotationMatrix(scratchMatrix);
}

function CameraController({ Place, Refs }) {
    const { camera } = useThree();

    useFrame((state, delta) => {
        let target = null;

        if (Place === "Home") {
            target = SPACE_TARGET;
            const rotAlpha = 1 - Math.exp(-3 * delta);
            camera.quaternion.slerp(lookAtQuaternion(camera, ORIGIN, scratchQuat), rotAlpha);
        }
        else if (Place === "About") {
            target = SUN_CAMERA_TARGET;
            const rotAlpha = 1 - Math.exp(-3 * delta);
            camera.quaternion.slerp(lookAtQuaternion(camera, FAR_X, scratchQuat), rotAlpha);
        }
        else if (Place === "Projects" && Refs.MercuryRef.current) {
            const position = Refs.MercuryRef.current.position;
            target = scratchTarget.set(position.x - 10, 0, position.z + 8.5);
            camera.lookAt(FAR_X);
        }
        else if (Place === "Skills" && Refs.VenusRef.current) {
            const position = Refs.VenusRef.current.position;
            target = scratchTarget.set(position.x - 15, 0, position.z + 5);
            camera.lookAt(FAR_X);
        }
        else if (Place === "Education" && Refs.EarthRef.current) {
            const position = Refs.EarthRef.current.position;
            target = scratchTarget.set(position.x - 10, 0, position.z - 8);
            camera.lookAt(FAR_X);
        }
        else if (Place === "Contact" && Refs.MarsRef.current) {
            const position = Refs.MarsRef.current.position;
            target = scratchTarget.set(position.x - 10, 0, position.z - 8);
            camera.lookAt(FAR_X);
        }

        if (!target) return;

        if (camera.position.distanceTo(target) > 1) {
            camera.position.lerp(target, 0.12);
        } else {
            camera.position.copy(target);
        }
    });

    return null;
}

// Bloom pass is isolated so route changes never re-render it. @react-three/postprocessing
// re-adds passes whenever its `children` prop identity changes, which is wasteful and
// crashes if the GL context is ever lost.
const PostFX = memo(function PostFX() {
    return (
        <EffectComposer>
            <Bloom
                intensity={1.2}
                luminanceThreshold={0.3}
                luminanceSmoothing={0.2}
                mipmapBlur
            />
        </EffectComposer>
    );
});

// Static scene content. Only CameraController depends on the current route, so the
// planets, stars, lights and post-processing are memoized and mount exactly once.
const SceneContent = memo(function SceneContent({ Refs }) {
    const { MercuryRef, VenusRef, EarthRef, MarsRef } = Refs;
    return (
        <>
            {/* Faint fill so the night side is not pure black. */}
            <ambientLight intensity={0.02} />
            {/* Only real light source is the Sun: lights exactly one hemisphere of each planet. */}
            <pointLight position={[0, 0, 0]} intensity={3} decay={0} />

            <Stars
                radius={250}
                depth={80}
                count={2500}
                factor={4}
                saturation={0}
                fade
                speed={2}
            />

            <color attach="background" args={["#000107"]} />

            {/* All of the planets */}

            <SunObject
            size={Sun.size}
            position={Sun.position}
            textureurl={Sun.texture}
            speed={0.001}
            />
            <PostFX />

            <Planet
            size={Mercury.size}
            anglechange={0.02}
            position={Mercury.position}
            textureurl={Mercury.texture}
            otherref={MercuryRef}
            speedx={0.004}
            />

            <Planet
            size={Venus.size}
            anglechange={0.01}
            position={Venus.position}
            textureurl={Venus.texture}
            otherref={VenusRef}
            speedx={0.004}
            />

            <Planet
            size={Earth.size}
            anglechange={0.005}
            position={Earth.position}
            textureurl={Earth.texture}
            otherref={EarthRef}
            speedx={0.004}
            speedy={0.005}
            />

            <Planet
            size={Mars.size}
            anglechange={0.0025}
            position={Mars.position}
            textureurl={Mars.texture}
            otherref={MarsRef}
            speedx={0.004}
            />

            <Planet
            size={Jupiter.size}
            anglechange={0.00125}
            position={Jupiter.position}
            textureurl={Jupiter.texture}
            speedx={0.004}
            />

            <Planet
            size={Saturn.size}
            anglechange={0.0009}
            position={Saturn.position}
            textureurl={Saturn.texture}
            speedx={0.004}
            />

            <Planet
            size={Uranus.size}
            anglechange={0.0005}
            position={Uranus.position}
            textureurl={Uranus.texture}
            speedx={0.004}
            />

                <Planet
            size={Neptune.size}
            anglechange={0.0001}
            position={Neptune.position}
            textureurl={Neptune.texture}
            speedx={0.004}
            />
        </>
    );
});

export default function SpaceScene({ Place }) {
    const MercuryRef = useRef(null);
    const VenusRef = useRef(null);
    const EarthRef = useRef(null);
    const MarsRef = useRef(null);
    // Stable object so SceneContent's memo never invalidates.
    const Refs = useMemo(
        () => ({ MercuryRef, VenusRef, EarthRef, MarsRef }),
        [],
    );

    return (
        <Canvas className="h-full w-full" dpr={[1, 1.5]}>
            <VisibilityController />
            <CameraController Place={Place} Refs={Refs} />
            {/*
              Suspense must live INSIDE the Canvas. Texture loads suspend here; if this
              boundary were outside, r3f's Canvas would re-throw the suspension, React
              would hide/re-mount the canvas and r3f would force-lose the GL context.
            */}
            <Suspense fallback={null}>
                <SceneContent Refs={Refs} />
            </Suspense>
        </Canvas>
    );
}   