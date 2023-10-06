import { Canvas } from "@react-three/fiber";
import { useGLTF, SoftShadows, OrbitControls } from "@react-three/drei";
import { EffectComposer, TiltShift2 } from "@react-three/postprocessing";

// function Model(props: any) {
//   const { nodes, materials } = useGLTF("/jump-transformed.glb") as any;
//   return (
//     <group {...props}>
//       <primitive object={nodes.mixamorigHips} />
//       <skinnedMesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Ch03.geometry}
//         material={materials.Ch03_Body}
//         skeleton={nodes.Ch03.skeleton}
//       />
//     </group>
//   );
// }

// export function Model(props: any) {
//   const { nodes, materials } = useGLTF("/assets/walcman-transformed.glb") as any;
//   console.log(nodes)
//   return (
//     <group {...props} dispose={null}>
//       <mesh
//         geometry={nodes.Walcman_dirt_Walkman_dirt_0.geometry}
//         material={materials.Walkman_dirt}
//         rotation={[-Math.PI / 2, 0, 0]}
//       />
//       <mesh
//         geometry={nodes.glass_dirt_Walkman_Glass_Dirt_0.geometry}
//         material={materials.Walkman_Glass_Dirt}
//         position={[-0.022, 0.094, 0.024]}
//         rotation={[-Math.PI / 2, 0, 0]}
//       />
//       {/* <mesh
//         geometry={nodes.Cassette_dirt_Cassette_Dirt_0.geometry}
//         material={materials.Cassette_Dirt}
//         position={[-0.012, 0.095, 0.015]}
//         rotation={[0, 0, Math.PI / 2]}
//       /> */}
//       {/* <mesh
//         geometry={nodes.Cassette002_Cassette_glass_dirt_0.geometry}
//         material={materials.Cassette_glass_dirt}
//         position={[-0.012, 0.095, 0.015]}
//         rotation={[0, 0, Math.PI / 2]}
//       /> */}
//     </group>
//   );
// }

export function Model(props: any) {
  const { nodes, materials } = useGLTF('/assets/cassette-transformed.glb') as any
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cassette_tape_black_clean001_M_Cassette_tape_black_clean_0.geometry} material={materials.M_Cassette_tape_black_clean} position={[-0.023, 0, -0.053]} rotation={[Math.PI / 2, 0, -0.629]} scale={0.1} />
      <mesh geometry={nodes.Cassette_tape_black_transparent_LOD0004_M_Cassette_tape_black_transparency_clean_0.geometry} material={materials.M_Cassette_tape_black_transparency_clean} position={[-0.023, 0.005, -0.053]} rotation={[Math.PI / 2, 0, -0.629]} scale={0.1} />
      <mesh geometry={nodes.Cassette_tape_transparent_white_labeled_dirty001_M_Cassette_tape_transparent_white_labeled_dirty_0.geometry} material={materials.M_Cassette_tape_transparent_white_labeled_dirty} position={[0.096, 0.012, -0.074]} rotation={[-Math.PI / 2, 0, -0.686]} scale={0.1} />
      <mesh geometry={nodes.Cassette_tape_transparent_nontransparent_LOD0008_M_Cassette_tape_white_dirty_0.geometry} material={materials.M_Cassette_tape_white_dirty} position={[0.096, 0.006, -0.074]} rotation={[-Math.PI / 2, 0, -0.686]} scale={0.1} />
      <mesh geometry={nodes.tape_roller_left_LOD0008_M_Cassette_tape_gray_dirty_0.geometry} material={materials.M_Cassette_tape_gray_dirty} position={[0.048, 0.006, -0.079]} rotation={[-Math.PI / 2, 0, -0.686]} scale={0.1} />
      <mesh geometry={nodes.Cassette_tape_case_black_clean001_M_Cassette_case_black_clean_0.geometry} material={materials.M_Cassette_case_black_clean} position={[-0.07, 0, -0.151]} rotation={[Math.PI / 2, 0, 1.712]} scale={0.1} />
      <mesh geometry={nodes.Cassete_tape_case_lid_LOD0006_M_Cassette_tape_case_transparent_black_clean_0.geometry} material={materials.M_Cassette_tape_case_transparent_black_clean} position={[-0.102, 0.007, -0.155]} rotation={[1.436, 0.756, 1.766]} scale={0.1} />
      <mesh geometry={nodes.Cassette_tape_transparent_gray_labeled_clean001_M_Cassette_tape_transparent_gray_labeled_clean_0.geometry} material={materials.M_Cassette_tape_transparent_gray_labeled_clean} position={[0.057, 0, 0.012]} rotation={[Math.PI / 2, 0, 1.356]} scale={0.1} />
      <mesh geometry={nodes.Cassette_tape_transparent_nontransparent_LOD0009_M_Cassette_tape_gray_clean_0.geometry} material={materials.M_Cassette_tape_gray_clean} position={[0.057, 0.006, 0.012]} rotation={[Math.PI / 2, 0, 1.356]} scale={0.1} />
      <mesh geometry={nodes.Cassette_tape_case_transparent_gray_dirty001_M_Cassetter_tape_case_transparent_gray_dirty_0.geometry} material={materials.M_Cassetter_tape_case_transparent_gray_dirty} position={[-0.039, 0, 0.046]} rotation={[Math.PI / 2, 0, 0.251]} scale={0.1} />
      <mesh geometry={nodes.Cassete_tape_case_label_LOD0006_M_Cassette_tape_case_label_gray_dirty_0.geometry} material={materials.M_Cassette_tape_case_label_gray_dirty} position={[-0.047, 0.007, 0.077]} rotation={[Math.PI / 2, 0, 0.251]} scale={0.1} />
      <mesh geometry={nodes.Cassete_tape_case_label_LOD0008_M_Cassette_tape_case_label_gray_clean_0.geometry} material={materials.M_Cassette_tape_case_label_gray_clean} position={[0.18, 0.007, -0.157]} rotation={[1.109, -0.763, -2.195]} scale={0.1} />
      <mesh geometry={nodes.Cassete_tape_case_label_LOD0007_M_Cassette_tape_case_label_white_clean_0.geometry} material={materials.M_Cassette_tape_case_label_white_clean} position={[0.22, 0.008, -0.136]} rotation={[Math.PI / 2, 0, 0.855]} scale={0.1} />
      <mesh geometry={nodes.Cassete_tape_case_label_LOD0010_M_Cassette_tape_case_label_white_dirty_0.geometry} material={materials.M_Cassette_tape_case_label_white_dirty} position={[-0.134, 0.007, -0.163]} rotation={[Math.PI / 2, 0, -1.04]} scale={0.1} />
      <mesh geometry={nodes.Cassette_tape_case_transparent_white_dirty001_M_Cassetter_tape_case_transparent_white_dirty_0.geometry} material={materials.M_Cassetter_tape_case_transparent_white_dirty} position={[0.036, 0, -0.17]} rotation={[Math.PI / 2, 0, -0.277]} scale={0.1} />
      <mesh geometry={nodes.Cassette_tape_transparent_gray_clean001_M_Cassette_tape_transparent_gray_clean_0.geometry} material={materials.M_Cassette_tape_transparent_gray_clean} position={[-0.133, 0, -0.069]} rotation={[Math.PI / 2, 0, -3.012]} scale={0.1} />
      <mesh geometry={nodes.Cassette_tape_transparent_white_labeled_clean001_M_Cassette_tape_transparent_white_labeled_clean_0.geometry} material={materials.M_Cassette_tape_transparent_white_labeled_clean} position={[-0.154, 0, 0.017]} rotation={[Math.PI / 2, 0, -0.432]} scale={0.1} />
      <mesh geometry={nodes.Cassette_tape_transparent_nontransparent_LOD0011_M_Cassette_tape_white_clean_0.geometry} material={materials.M_Cassette_tape_white_clean} position={[-0.154, 0.006, 0.017]} rotation={[Math.PI / 2, 0, -0.432]} scale={0.1} />
      <mesh geometry={nodes.Cassette_tape_black_labeled_dirty001_M_Cassette_tape_black_labeled_dirty_0.geometry} material={materials.M_Cassette_tape_black_labeled_dirty} position={[0.136, 0, 0.04]} rotation={[1.502, -0.018, -1.294]} scale={0.1} />
      <mesh geometry={nodes.tape_circle_right_LOD0017_M_Cassette_tape_black_dirty_0.geometry} material={materials.M_Cassette_tape_black_dirty} position={[0.144, 0.004, 0.02]} rotation={[1.502, -0.018, -1.294]} scale={0.1} />
      <mesh geometry={nodes.Cassette_tape_black_transparent_LOD0005_M_Cassette_tape_black_transparency_dirty_0.geometry} material={materials.M_Cassette_tape_black_transparency_dirty} position={[0.136, 0.005, 0.04]} rotation={[1.502, -0.018, -1.294]} scale={0.1} />
      <mesh geometry={nodes.Cassette_tape_case_transparent_gray_clean001_M_Cassetter_tape_case_transparent_gray_clean_0.geometry} material={materials.M_Cassetter_tape_case_transparent_gray_clean} position={[0.151, 0, -0.144]} rotation={[Math.PI / 2, 0, -2.006]} scale={0.1} />
      <mesh geometry={nodes.Cassette_tape_case_transparent_white_clean001_M_Cassetter_tape_case_transparent_white_clean_0.geometry} material={materials.M_Cassetter_tape_case_transparent_white_clean} position={[0.245, 0.001, -0.158]} rotation={[Math.PI / 2, 0, 0.855]} scale={0.1} />
      <mesh geometry={nodes.Cassette_tape_black_labeled_clean001_M_Cassette_tape_black_labeled_clean_0.geometry} material={materials.M_Cassette_tape_black_labeled_clean} position={[0.041, 0.01, -0.024]} rotation={[Math.PI / 2, 0, 0.112]} scale={0.1} />
      <mesh geometry={nodes.Cassette_tape_transparent_white_clean001_M_Cassette_tape_transparent_white_clean_0.geometry} material={materials.M_Cassette_tape_transparent_white_clean} position={[-0.112, 0.021, -0.043]} rotation={[-Math.PI / 2, 0, 0.709]} scale={0.1} />
      <mesh geometry={nodes.Cassette_tape_transparent_gray_labeled_dirty001_M_Cassette_tape_transparent_gray_labeled_dirty_0.geometry} material={materials.M_Cassette_tape_transparent_gray_labeled_dirty} position={[-0.079, 0, -0.269]} rotation={[Math.PI / 2, 0, -1.775]} scale={0.1} />
      <mesh geometry={nodes.Cassette_tape_transparent_gray_dirty001_M_Cassette_tape_transparent_gray_dirty_0.geometry} material={materials.M_Cassette_tape_transparent_gray_dirty} position={[0.231, 0.002, 0.034]} rotation={[Math.PI / 2, 0, 2.636]} scale={0.1} />
      <mesh geometry={nodes.Cassette_tape_transparent_white_dirty001_M_Cassette_tape_transparent_white_dirty_0.geometry} material={materials.M_Cassette_tape_transparent_white_dirty} position={[0.244, 0, -0.254]} rotation={[Math.PI / 2, 0, 0.458]} scale={0.1} />
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')


const _ = () => (
  <Canvas
    shadows
    gl={{ antialias: false }}
    camera={{ position: [1, 0.5, 2.5], fov: 50 }}
  >
    <color attach="background" args={["#f0f0f0"]} />
    {/* <fog attach="fog" args={["#f0f0f0", 0, 20]} /> */}
    <ambientLight intensity={2} />
    <directionalLight
      intensity={2}
      position={[-5, 5, 5]}
      castShadow
      shadow-mapSize={2048}
      shadow-bias={-0.0001}
    />
    <Model position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.1} />
    <mesh
      rotation={[-0.5 * Math.PI, 0, 0]}
      position={[0, -1.01, 0]}
      receiveShadow
    >
      <planeGeometry args={[10, 10, 1, 1]} />
      <shadowMaterial transparent opacity={0.75} />
    </mesh>
    <SoftShadows size={40} samples={16} />
    {/* <EffectComposer disableNormalPass multisampling={4}>
      <TiltShift2 blur={1} />
    </EffectComposer> */}
    <OrbitControls />
  </Canvas>
);

useGLTF.preload("/walcman-transformed.glb");

export default _;
