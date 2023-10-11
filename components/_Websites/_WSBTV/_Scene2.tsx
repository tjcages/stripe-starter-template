import * as THREE from "three";
import { useRef, useState } from "react";
import { easing } from "maath";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Center,
  Caustics,
  Environment,
  Lightformer,
  RandomizedLight,
  PerformanceMonitor,
  AccumulativeShadows,
  MeshTransmissionMaterial,
} from "@react-three/drei";

const innerMaterial = new THREE.MeshStandardMaterial({
  transparent: true,
  opacity: 1,
  color: "black",
  roughness: 0,
  side: THREE.FrontSide,
  blending: THREE.AdditiveBlending,
  polygonOffset: true,
  polygonOffsetFactor: 1,
  envMapIntensity: 2,
});

export default function App() {
  const [perfSucks, degrade] = useState(false);
  return (
    <Canvas
      shadows
      dpr={[1, perfSucks ? 1.5 : 2]}
      eventSource={document.getElementById("root")}
      eventPrefix="client"
      camera={{ position: [20, 0.9, 20], fov: 26 }}
      style={{ position: "absolute" }}
      className="top-0 left-0 right-0 bottom-0"
    >
      {/** PerfMon will detect performance issues */}
      <PerformanceMonitor onDecline={() => degrade(true)} />
      <color attach="background" args={["#f0f0f0"]} />
      <group position={[0, -0.5, 0]} rotation={[0, -0.75, 0]}>
        <Scene />
        <AccumulativeShadows
          frames={100}
          alphaTest={0.85}
          opacity={0.8}
          color="red"
          scale={20}
          position={[0, -0.005, 0]}
        >
          <RandomizedLight
            amount={8}
            radius={6}
            ambient={0.5}
            intensity={1}
            position={[-1.5, 2.5, -2.5]}
            bias={0.001}
          />
        </AccumulativeShadows>
      </group>
      <Env perfSucks={perfSucks} />
    </Canvas>
  );
}

function Scene(props) {
  return (
    <group {...props} dispose={null}>
      <Center rotation={[0, -0.4, 0]} position={[-1, -0.01, -2]} top>
        
      </Center>
    </group>
  )
}

function Env({ perfSucks }) {
  const ref = useRef();
  useFrame((state, delta) => {
    // Animate the environment as well as the camera
    if (!perfSucks) {
      easing.damp3(
        ref.current.rotation,
        [Math.PI / 2, 0, state.clock.elapsedTime / 5 + state.pointer.x],
        0.2,
        delta
      );
      easing.damp3(
        state.camera.position,
        [
          Math.sin(state.pointer.x / 4) * 9,
          1.25 + state.pointer.y,
          Math.cos(state.pointer.x / 4) * 9,
        ],
        0.5,
        delta
      );
      state.camera.lookAt(0, 0, 0);
    }
  });
  // Runtime environments can be too slow on some systems, better safe than sorry with PerfMon
  return (
    <Environment
      frames={perfSucks ? 1 : Infinity}
      preset="city"
      resolution={256}
      background
      blur={0.8}
    >
      <Lightformer
        intensity={4}
        rotation-x={Math.PI / 2}
        position={[0, 5, -9]}
        scale={[10, 10, 1]}
      />
      <Lightformer
        intensity={4}
        rotation-x={Math.PI / 2}
        position={[0, 5, -9]}
        scale={[10, 10, 1]}
      />
      <group rotation={[Math.PI / 2, 1, 0]}>
        {[2, -2, 2, -4, 2, -5, 2, -9].map((x, i) => (
          <Lightformer
            key={i}
            intensity={1}
            rotation={[Math.PI / 4, 0, 0]}
            position={[x, 4, i * 4]}
            scale={[4, 1, 1]}
          />
        ))}
        <Lightformer
          intensity={0.5}
          rotation-y={Math.PI / 2}
          position={[-5, 1, -1]}
          scale={[50, 2, 1]}
        />
        <Lightformer
          intensity={0.5}
          rotation-y={Math.PI / 2}
          position={[-5, -1, -1]}
          scale={[50, 2, 1]}
        />
        <Lightformer
          intensity={0.5}
          rotation-y={-Math.PI / 2}
          position={[10, 1, 0]}
          scale={[50, 2, 1]}
        />
      </group>
      <group ref={ref}>
        <Lightformer
          intensity={5}
          form="ring"
          color="red"
          rotation-y={Math.PI / 2}
          position={[-5, 2, -1]}
          scale={[10, 10, 1]}
        />
      </group>
    </Environment>
  );
}
