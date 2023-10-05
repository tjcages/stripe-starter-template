import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  AccumulativeShadows,
  RandomizedLight,
  Decal,
  Environment,
  Center,
} from "@react-three/drei";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { state } from "@/store";

interface Props {
  position?: [number, number, number];
  fov?: number;
}

const Main = ({ position = [0, 0, 2.5], fov = 25 }: Props) => (
  <Canvas
    shadows
    camera={{ position, fov }}
    gl={{ preserveDrawingBuffer: true }}
    // eventSource={document.getElementById("root")}
    // eventPrefix="client"
  >
    <ambientLight intensity={0.5} />
    <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />
    <CameraRig>
      <Backdrop />
      <Center>
        <Shirt />
      </Center>
    </CameraRig>
  </Canvas>
);

function Backdrop() {
  const shadows = useRef() as any;
  const snap = useSnapshot(state);
  useFrame((state, delta) =>
    easing.dampC(
      shadows.current.getMesh().material.color,
      snap.tabs[snap.selected].color,
      0.25,
      delta
    )
  );
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={5}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
}

function CameraRig({ children }: { children: React.ReactNode }) {
  const group = useRef() as any;
  const snap = useSnapshot(state);
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [snap.intro ? state.viewport.width / 4 : 0, 0, 2.5],
      0.25,
      delta
    );
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });
  return <group ref={group}>{children}</group>;
}

function Shirt(props: any) {
  const snap = useSnapshot(state);
  const texture = useTexture(`/assets/${snap.decal}.png`);
  const { nodes, materials } = useGLTF(
    "/assets/shirt_baked_collapsed.glb"
  ) as any;
  useFrame((state, delta) =>
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)
  );
  return (
    <mesh
      castShadow
      geometry={nodes.T_Shirt_male.geometry}
      material={materials.lambert1}
      material-roughness={1}
      {...props}
      dispose={null}
    >
      <Decal
        position={[0, 0.04, 0.15]}
        rotation={[0, 0, 0]}
        scale={0.15}
        map={texture}
        // map-anisotropy={16}
      />
    </mesh>
  );
}

useGLTF.preload("/assets/shirt_baked_collapsed.glb");
["/assets/react.png", "/assets/three2.png", "/assets/pmndrs.png"].forEach(
  useTexture.preload
);

export default Main;
