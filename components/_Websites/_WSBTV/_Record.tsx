import { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

const _ = forwardRef(function Record(
  {
    position = [1.11, 0.08, 0.076],
    rotation,
  }: {
    rotation?: [number, number, number];
    position?: [number, number, number];
  },
  ref: any
) {
  const { nodes, materials } = useGLTF("/assets/record-transformed.glb") as any;

  return (
    <group ref={ref} position={position} rotation={rotation}>
      {/* <mesh
        geometry={nodes.Object_136.geometry}
        material={materials.Vinyl_record}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.092}
      />
      <mesh
        geometry={nodes.Object_138.geometry}
        material={materials.Vinyl_record}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.092}
      /> */}
      <mesh
        name="Buffer_Object"
        geometry={nodes.Buffer_Object.geometry}
        material={materials["Material.001"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.05}
      />
      <mesh
        name="Circle"
        geometry={nodes.Circle.geometry}
        material={materials.Material}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.05}
      />
    </group>
  );
});

useGLTF.preload("/assets/record-transformed.glb");

export default _;