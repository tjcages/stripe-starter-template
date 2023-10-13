import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  PerformanceMonitor,
  OrbitControls,
} from "@react-three/drei";
import { Vector3 } from "three";
import Player from "./_Model";
import Post from "./_Post";
import Camera from "./_Camera";

const _ = ({ position = new Vector3(-1, 2, 5.5), fov = 45 }) => {
  const [degraded, degrade] = useState(false);

  return (
    <Canvas
      camera={{
        position,
        fov,
      }}
      gl={{ preserveDrawingBuffer: true }}
      eventPrefix="client"
      className="top-0 left-0 right-0 bottom-0"
      style={{ position: "absolute" }}
    >
      <spotLight
        position={[0, 15, 0]}
        angle={0.3}
        penumbra={1}
        castShadow
        intensity={2}
        shadow-bias={-0.0001}
      />
      {/* <ambientLight intensity={0.5} /> */}
      <Player castShadow />
      <Environment preset="city" />
      {/* <Environment
        frames={degraded ? 1 : Infinity}
        files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr"
      /> */}
      <PerformanceMonitor onDecline={() => degrade(true)} />
      <Camera />
      <Post />
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default _;
