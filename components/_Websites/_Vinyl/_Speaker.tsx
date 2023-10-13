import { forwardRef } from "react";

const _ = forwardRef(function Record(
  {
    nodes,
    materials,
    position,
    rotation,
  }: {
    nodes: any;
    materials: any;
    rotation?: [number, number, number];
    position?: [number, number, number];
  },
  ref: any
) {
  return (
    <group ref={ref} position={position} rotation={rotation}>
      <mesh
        geometry={nodes.Object_66.geometry}
        material={materials.BraunTP1_main}
        position={[1.359, -0.034, 0.017]}
        rotation={[0, -0.318, 0]}
        scale={0.092}
      />
      <mesh
        geometry={nodes.Object_68.geometry}
        material={materials.BraunTP1_main}
        position={[1.359, -0.034, 0.017]}
        rotation={[0, -0.318, 0]}
        scale={0.092}
      />
      {/* <mesh
        geometry={nodes.Object_70.geometry}
        material={materials.BraunTP1_main}
        position={[1.359, -0.034, 0.017]}
        rotation={[0, -0.318, 0]}
        scale={0.092}
      /> */}
      <mesh
        geometry={nodes.Object_72.geometry}
        material={materials.BraunTP1_main}
        position={[1.359, -0.034, 0.017]}
        rotation={[0, -0.318, 0]}
        scale={0.092}
      />
      <mesh
        geometry={nodes.Object_74.geometry}
        material={materials.BraunTP1_main}
        position={[1.359, -0.034, 0.017]}
        rotation={[0, -0.318, 0]}
        scale={0.092}
      />
      {/* <mesh
        geometry={nodes.Object_76.geometry}
        material={materials.BraunTP1_main}
        position={[1.359, -0.034, 0.017]}
        rotation={[0, -0.318, 0]}
        scale={0.092}
      /> */}
      {/* <mesh
        geometry={nodes.Object_78.geometry}
        material={materials.BraunTP1_main}
        position={[1.359, -0.034, 0.017]}
        rotation={[0, -0.318, 0]}
        scale={0.092}
      /> */}
      {/* <mesh
        geometry={nodes.Object_80.geometry}
        material={materials.BraunTP1_main}
        position={[1.359, -0.034, 0.017]}
        rotation={[0, -0.318, 0]}
        scale={0.092}
      /> */}
      {/* <mesh
        geometry={nodes.Object_84.geometry}
        material={materials.BraunTP1_GLASS}
        position={[1.359, -0.034, 0.017]}
        rotation={[0, -0.318, 0]}
        scale={0.092}
      /> */}
      <mesh
        geometry={nodes.Object_82.geometry}
        material={materials.BraunTP1_main}
        position={[1.359, -0.034, 0.017]}
        rotation={[0, -0.318, 0]}
        scale={0.092}
      />
    </group>
  );
});

export default _;
