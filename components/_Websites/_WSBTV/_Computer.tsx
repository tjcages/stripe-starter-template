import { useMemo, useContext, createContext, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Merged,
  RenderTexture,
  PerspectiveCamera,
  Text,
} from "@react-three/drei";

function Screen({ frame, panel, children, ...props }: any) {
  const { nodes, materials } = useGLTF(
    "/assets/computers_1-transformed.glb"
  ) as any;
  return (
    <group {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes[frame].geometry}
        material={materials.Texture}
      />
      <mesh geometry={nodes[panel].geometry}>
        <meshBasicMaterial toneMapped={false}>
          <RenderTexture width={512} height={512} attach="map" anisotropy={16}>
            {children}
          </RenderTexture>
        </meshBasicMaterial>
      </mesh>
    </group>
  );
}

function ScreenText({ invert = false, x = 0, y = 0.8, ...props }) {
  const textRef = useRef() as any;
  const rand = Math.random() * 17500;
  useFrame(
    (state) =>
      (textRef.current.position.x =
        x + Math.sin(rand + state.clock.elapsedTime / 4) * 12)
  );
  return (
    <Screen {...props}>
      <PerspectiveCamera
        makeDefault
        manual
        aspect={1 / 1}
        position={[0, 0, 15]}
      />
      <color attach="background" args={[invert ? "black" : "#35c19f"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 5, 5]} />
      <Text
        font="/Inter-Medium.woff"
        position={[x, y, 0]}
        ref={textRef}
        fontSize={2.5}
        letterSpacing={-0.1}
        color={!invert ? "black" : "#35c19f"}
      >
        WE SO FUCKING BACK
      </Text>
    </Screen>
  );
}

const context = createContext(true);
export function Instances({ children, ...props }: any) {
  const { nodes } = useGLTF("/assets/computers_1-transformed.glb") as any;
  const instances = useMemo(
    () => ({
      Object: nodes.Object_4,
      Object1: nodes.Object_16,
      Object3: nodes.Object_52,
      Object13: nodes.Object_172,
      Object14: nodes.Object_174,
      Object23: nodes.Object_22,
      Object24: nodes.Object_26,
      Object32: nodes.Object_178,
      Object36: nodes.Object_28,
      Object45: nodes.Object_206,
      Object46: nodes.Object_207,
      Object47: nodes.Object_215,
      Object48: nodes.Object_216,
      Sphere: nodes.Sphere,
    }),
    [nodes]
  );
  return (
    <Merged castShadow receiveShadow meshes={instances} {...props}>
      {(instances: any) => (
        <context.Provider value={instances}>{children}</context.Provider>
      )}
    </Merged>
  );
}

const _ = (props: any) => {
  const { nodes: n, materials: m } = useGLTF(
    "/assets/computers_1-transformed.glb"
  ) as any;
  const instances = useContext(context) as any;
  return (
    <group {...props} dispose={null}>
      <ScreenText
        frame="Object_206"
        panel="Object_207"
        position={[0.5, 2.5, 0]}
        scale={1.25}
      />

      <instances.Object1
        position={[0.4, 0.32, 0.4]}
        rotation={[0, 0.53, -Math.PI / 2]}
        scale={1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={n.Object_24.geometry}
        material={m.Texture}
        position={[0, 0.94, 0]}
        rotation={[0, 0.14, Math.PI / 2]}
        scale={-1.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={n.Object_18.geometry}
        material={m.Texture}
        position={[-0.5, 0, 0]}
        rotation={[0, -0.06, 0]}
        scale={1.52}
      />
      <instances.Object23
        position={[0, 1.56, 0]}
        rotation={[0, -0.005, -Math.PI / 2]}
        scale={1.52}
      />
      <instances.Object24
        position={[0, 2.19, 0]}
        rotation={[0, 0.51, Math.PI / 2]}
        scale={-1.52}
      />
    </group>
  );
};

export default _;
