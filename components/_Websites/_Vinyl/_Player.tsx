import { forwardRef } from "react";

const _ = forwardRef(function Player(
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
        geometry={nodes.Object_96.geometry}
        material={materials.BraunTP1_main}
        position={[1.029, 0.033, -0.039]}
        rotation={[-Math.PI / 2, 0, 0.314]}
        scale={0.092}
      />
      <mesh
        geometry={nodes.Object_100.geometry}
        material={materials.BraunTP1_main}
        position={[1.054, 0.06, 0.04]}
        rotation={[0, 0.314, 0]}
        scale={[0.137, 0.137, 0.044]}
      />
      <mesh
        geometry={nodes.Object_110.geometry}
        material={materials.BraunTP1_main}
        position={[1.11, 0.071, 0.076]}
        rotation={[-Math.PI / 2, 0, 0.314]}
        scale={[0.087, 0.087, 0.092]}
      />
      {/* <mesh
        geometry={nodes.Object_104.geometry}
        material={materials.BraunTP1_main}
        position={[0.98, 0.052, 0.168]}
        rotation={[-Math.PI / 2, 0, 1.885]}
        scale={0.003}
      /> */}
      {/* <mesh
        geometry={nodes.Object_98.geometry}
        material={materials.BraunTP1_main}
        position={[1.11, 0.074, 0.076]}
        rotation={[-Math.PI / 2, 0, 0.314]}
        scale={0.002}
      /> */}
      <mesh
        geometry={nodes.Object_112.geometry}
        material={materials.BraunTP1_main}
        position={[1.11, 0.065, 0.076]}
        rotation={[-Math.PI / 2, 0, 0.314]}
        scale={0.092}
      />
      <mesh
        geometry={nodes.Object_112.geometry}
        material={materials.BraunTP1_main}
        position={[1.11, 0.07, 0.076]}
        rotation={[-Math.PI / 2, 0, 0.314]}
        scale={[0.012, 0.012, 0.052]}
      />
      <mesh
        geometry={nodes.Object_94.geometry}
        material={materials.BraunTP1_main}
        position={[1.041, 0.032, -0.001]}
        rotation={[-Math.PI / 2, 0, 0.314]}
        scale={0.092}
      />
      <mesh
        geometry={nodes.Object_102.geometry}
        material={materials.BraunTP1_main}
        position={[1.041, 0.032, -0.001]}
        rotation={[-Math.PI / 2, 0, 0.314]}
        scale={0.092}
      />
      <mesh
        geometry={nodes.Object_106.geometry}
        material={materials.BraunTP1_main}
        position={[1.11, 0.071, 0.076]}
        rotation={[-Math.PI / 2, 0, 0.314]}
        scale={0.092}
      />
      <mesh
        geometry={nodes.Object_114.geometry}
        material={materials.BraunTP1_main}
        position={[1.11, 0.055, 0.076]}
        rotation={[0, 0.314, 0]}
        scale={0.057}
      />
      <mesh
        geometry={nodes.Object_116.geometry}
        material={materials.BraunTP1_puck}
        position={[1.013, 0.041, 0.074]}
        rotation={[-1.294, 0.027, 0.143]}
        scale={0.092}
      />
      <mesh
        geometry={nodes.Object_108.geometry}
        material={materials.BraunTP1_main}
        position={[1.11, 0.071, 0.076]}
        rotation={[-Math.PI / 2, 0, 0.314]}
        scale={0.092}
      />
      {/* <mesh
        geometry={nodes.Object_118.geometry}
        material={materials.BraunTP1_puck}
        position={[1.013, 0.041, 0.074]}
        rotation={[-1.294, 0.027, 0.143]}
        scale={0.092}
      /> */}
      <mesh
        geometry={nodes.Object_120.geometry}
        material={materials.BraunTP1_puck}
        position={[1.013, 0.041, 0.074]}
        rotation={[-1.294, 0.027, 0.143]}
        scale={0.092}
      />
      {/* <mesh
        geometry={nodes.Object_122.geometry}
        material={materials.BraunTP1_puck}
        position={[1.013, 0.041, 0.074]}
        rotation={[-1.294, 0.027, 0.143]}
        scale={0.092}
      /> */}
      {/* <mesh
        geometry={nodes.Object_124.geometry}
        material={materials.BraunTP1_puck}
        position={[1.013, 0.041, 0.074]}
        rotation={[-1.294, 0.027, 0.143]}
        scale={0.092}
      /> */}
    </group>
  );
});

export default _;
