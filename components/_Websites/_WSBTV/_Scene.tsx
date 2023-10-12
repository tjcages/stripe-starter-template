import { Canvas } from "@react-three/fiber";
import { Environment, Center, OrbitControls, Float } from "@react-three/drei";
import { Vector3 } from "three";
import { useSnapshot } from "valtio";
import { state } from "@/store";
import Player from "./_Player";
import Post from "./_Post";
import Camera from "./_Camera";

const _ = ({ position = new Vector3(-2, 1, 8.5), fov = 45 }) => {
  const snap = useSnapshot(state);
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
      <Center>
        <Float enabled={!snap.musicPlaying}>
          <Player />
        </Float>
      </Center>
      <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" />
      <Camera />
      <Post />
    </Canvas>
  );
};

export default _;
