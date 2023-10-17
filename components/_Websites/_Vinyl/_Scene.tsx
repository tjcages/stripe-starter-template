import { useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  PerformanceMonitor,
  OrbitControls,
} from "@react-three/drei";
import { Vector3 } from "three";
import gsap from "gsap";
import { useSnapshot } from "valtio";
import { state } from "@/store";
import Player from "./_Model";
import Post from "./_Post";
import Camera from "./_Camera";

const _ = ({ position = new Vector3(-1, 2, 5.5), fov = 45 }) => {
  const snap = useSnapshot(state);
  const ref = useRef() as any;
  const [degraded, degrade] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    if (snap.side == "front") {
      gsap.to(ref.current, {
        r: 229 / 255,
        g: 189 / 255,
        b: 83 / 255,
        duration: 0.5,
        ease: "power4.out",
      });
    } else {
      gsap.to(ref.current, {
        r: 145 / 255,
        g: 187 / 255,
        b: 227 / 255,
        duration: 0.5,
        ease: "power4.out",
      });
    }
  }, [snap.side]);

  return (
    <Canvas
      camera={{
        position,
        fov,
      }}
      gl={{ preserveDrawingBuffer: true }}
      eventPrefix="client"
      className="top-0 left-0 right-0 bottom-0"
      style={{ position: "absolute", pointerEvents: snap.mobile ? "none" : "auto" }}
    >
      <color ref={ref} attach="background" args={["#f3df9a"]} />
      <spotLight
        position={[0, 2, 3]}
        angle={0.7}
        penumbra={1}
        castShadow
        intensity={10}
        shadow-bias={-0.0001}
        // color="#e5bd53"
      />
      <Player castShadow />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.7, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial transparent opacity={0} />
      </mesh>
      <Environment preset="city" frames={degraded ? 1 : Infinity} />
      {/* <Environment
        frames={degraded ? 1 : Infinity}
        files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr"
      /> */}
      <PerformanceMonitor onDecline={() => degrade(true)} />
      <Camera playing={snap.musicPlaying} mobile={snap.mobile} />
      <Post />
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default _;
