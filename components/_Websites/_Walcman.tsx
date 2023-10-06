import { useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useGLTF, SoftShadows } from "@react-three/drei";
import { EffectComposer, TiltShift2 } from "@react-three/postprocessing";
import { GLTF } from "three-stdlib";
import { easing } from "maath";

type GLTFResult = GLTF & {
  nodes: {
    CassetteTape_Main_low_01_3_CassetteTape_01a_0: THREE.Mesh;
    CassetteTape_Main_low_01_2_CassetteTape_01a_0: THREE.Mesh;
    CassetteTape_Main_low_01_1_CassetteTape_01a_0: THREE.Mesh;
    CassetteTape_Main_low_02_1_CassetteTape_02a_0: THREE.Mesh;
    CassetteTape_Main_low_02_2_CassetteTape_02a_0: THREE.Mesh;
    CassetteTape_Main_low_02_3_CassetteTape_02a_0: THREE.Mesh;
  };
  materials: {
    CassetteTape_01a: THREE.MeshStandardMaterial;
    CassetteTape_02a: THREE.MeshPhysicalMaterial;
  };
};

interface Props {
  geometry: THREE.BufferGeometry;
  material: THREE.Material;
  position: [number, number, number];
  rotation: [number, number, number];
  index: number;
  selected: number | null;
  select: (index: number | null) => void;
}

const Tape = ({
  geometry,
  material,
  position,
  rotation,
  index,
  selected,
  select,
}: Props) => {
  const ref = useRef<any>();
  const [hovering, setHovering] = useState(false);

  useFrame((state, delta) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime();
    if (selected == index) {
      // focus
      easing.damp3(
        ref.current.rotation,
        [
          Math.PI / 2 + state.pointer.x * 0.3,
          Math.PI - Math.sin(time / 2) * Math.PI,
          Math.PI / 5,
        ],
        0.5,
        delta
      );
      easing.damp3(ref.current.position, [0, 0.9, -0.1], 0.5, delta);
    } else if (selected !== null) {
      // out of view
      easing.damp3(ref.current.rotation, [Math.PI / 2, Math.PI, 0], 0.5, delta);
      easing.damp3(ref.current.position, [position[0], 0, 2], 0.5, delta);
    } else {
      easing.damp3(ref.current.position, position, 0.5, delta);
      if (hovering) {
        easing.damp3(
          ref.current.rotation,
          [-Math.PI / 2 + state.pointer.x * 0.3, state.pointer.y * 0.6, 0],
          0.5,
          delta
        );
      } else {
        easing.damp3(ref.current.rotation, [-Math.PI / 2, 0, 0], 0.5, delta);
      }
    }
  });

  return (
    <mesh
      ref={ref}
      geometry={geometry}
      material={material}
      position={position}
      rotation={rotation}
      castShadow
      scale={4}
      onPointerOver={() => setHovering(true)}
      onPointerOut={() => setHovering(false)}
      onClick={() =>
        selected == index && selected !== null ? select(null) : select(index)
      }
    />
  );
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/assets/tape-transformed.glb"
  ) as GLTFResult;
  const viewport = useThree((state) => state.viewport);

  const tapes = [
    {
      id: 0,
      geometry: nodes.CassetteTape_Main_low_01_3_CassetteTape_01a_0.geometry,
      material: materials.CassetteTape_01a,
    },
    {
      id: 1,
      geometry: nodes.CassetteTape_Main_low_01_2_CassetteTape_01a_0.geometry,
      material: materials.CassetteTape_01a,
    },
    {
      id: 2,
      geometry: nodes.CassetteTape_Main_low_01_1_CassetteTape_01a_0.geometry,
      material: materials.CassetteTape_01a,
    },
    {
      id: 3,
      geometry: nodes.CassetteTape_Main_low_02_1_CassetteTape_02a_0.geometry,
      material: materials.CassetteTape_02a,
    },
    {
      id: 4,
      geometry: nodes.CassetteTape_Main_low_02_2_CassetteTape_02a_0.geometry,
      material: materials.CassetteTape_02a,
    },
    {
      id: 5,
      geometry: nodes.CassetteTape_Main_low_02_3_CassetteTape_02a_0.geometry,
      material: materials.CassetteTape_02a,
    },
  ];
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <group {...props} dispose={null}>
      {tapes.map((tape, i) => (
        <Tape
          key={"tape-" + i}
          geometry={tape.geometry}
          material={tape.material}
          position={[
            -viewport.width / 5 + (i % 2 === 0 ? 0.45 : 0),
            0.3,
            -0.25 + Math.floor(i / 2) * 0.3,
          ]}
          rotation={[-Math.PI / 2, 0, 0]}
          index={i}
          selected={selected}
          select={setSelected}
        />
      ))}
    </group>
  );
}

useGLTF.preload("/assets/tape-transformed.glb");

const _ = () => {
  return (
    <div className="sticky top-0 left-0 right-0 bottom-0 flex w-full h-full gap-4 bg-[#f0f0f0] cubes scripton">
      <div className="relative w-full h-full">
        {/* Underlay */}
        <div className="absolute left-0 right-0 bottom-0 p-8 flex flex-col jusitfy-end items-start">
          <p>#35-330 // L-Star</p>
          <h1 className="font-extralight text-left">
            A.I Engineering Tool & Ultra Fast Calculations for&nbsp;Architectors
          </h1>
          <h4 className="max-w-[300px]">
            Never fear, pro tool is here. L-Star is a tool for architects to do
            their job faster and more efficiently –––––– ready?
          </h4>
        </div>

        <Canvas
          shadows
          gl={{ antialias: false }}
          camera={{ position: [0, 0, 3], fov: 25 }}
          className="w-full h-full"
        >
          <fog attach="fog" args={["#f0f0f0", 0, 20]} />
          <ambientLight intensity={2} />
          <directionalLight
            intensity={0.2}
            position={[0, 0, 0]}
            castShadow
            shadow-mapSize={1024}
            shadow-bias={-0.0001}
          />
          <Model rotation={[Math.PI / 2, 0, 0]} />
          {/* <EffectComposer disableNormalPass multisampling={4}>
          </EffectComposer> */}
        </Canvas>
      </div>

      {/* Spacer */}
      <div className="w-full min-w-[412px] max-w-[412px]" />
    </div>
  );
};

export default _;
