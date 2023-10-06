import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Marquee from "react-marquee-slider";
import gsap from "gsap";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  ScrollControls,
  Scroll,
  useScroll,
  useGLTF,
  useTexture,
  useCursor,
} from "@react-three/drei";
import { easing } from "maath";
import { state } from "@/store";
import { useSnapshot } from "valtio";

const records = Array(10).fill(0);

const Record = ({
  i,
  selected,
  set,
  clicked,
  setClicked,
}: {
  i: number;
  selected: number;
  set: (i: number) => void;
  clicked: number | null;
  setClicked: (i: number | null) => void;
}) => {
  const data = useScroll();
  const ref = useRef<any>();
  const disc = useRef<any>();
  const offset = useRef(0);
  const [hovered, setHovered] = useState(false);
  const viewport = useThree((state) => state.viewport);
  const [cover] = useTexture(["/three/rufus.jpg"]);

  useCursor(hovered);
  useFrame((state, delta) => {
    if (clicked == i) {
      easing.damp3(
        ref.current.rotation,
        [state.pointer.x * 0.5 + 0.25, state.pointer.y * 0.5 + 0.25, 0],
        0.5,
        delta
      );

      return;
    } else if (clicked !== null) return;

    const percent = i / records.length;
    if (Math.abs(offset.current - data.offset) < 0.1) return;
    var g = Math.abs(data.offset - percent) < 1 / records.length / 2;
    if (i == records.length - 1 && data.offset > 1 - 1 / records.length)
      g = true;
    else if (i == 0 && data.offset <= 1 / records.length) g = true;

    if (g && selected !== i) set(i);

    offset.current = data.offset;
  });

  useEffect(() => {
    if (selected == i) {
      gsap.to(ref.current.position, {
        x: (-1 + i) * 0.7,
        y: 1,
        duration: 1,
        ease: "power4.out",
      });
    } else {
      gsap.to(ref.current.position, {
        x: (-1 + i) * 0.7,
        y: 0,
        duration: 0.5,
        ease: "power4.out",
        overwrite: true,
      });
    }
  }, [i, selected]);

  useEffect(() => {
    if (clicked !== null && clicked == i) {
      // clicked
      gsap.to(ref.current.scale, {
        x: 1,
        y: 1,
        duration: 0.5,
        ease: "power4.out",
        overwrite: true,
      });
      gsap.to(ref.current.position, {
        x:
          ((viewport.width * 1.8) / 2) * data.offset - viewport.width / 4 - 0.2,
        y: 0.5,
        duration: 0.5,
        ease: "power4.out",
        overwrite: true,
      });
      gsap.to(ref.current.rotation, {
        y: 0,
        duration: 0.5,
        ease: "power4.out",
        overwrite: true,
      });
    } else if (clicked !== null) {
      // move away
      gsap.to(ref.current.scale, {
        x: 0.8,
        y: 0.8,
        duration: 0.5,
        ease: "power4.out",
        overwrite: true,
      });
      gsap.to(ref.current.position, {
        x:
          ((viewport.width * 1.8) / 2) * data.offset +
          (clicked > i ? -2 : 1) * (2 + Math.abs(clicked - i) * 0.3),
        y: -0.2,
        duration: 0.5,
        ease: "power4.out",
        overwrite: true,
      });
      gsap.to(ref.current.rotation, {
        y: clicked > i ? Math.PI / 4 : -Math.PI / 4,
        duration: 0.5,
        ease: "power4.out",
        overwrite: true,
      });
    } else {
      // reset
      gsap.to(ref.current.scale, {
        x: 1,
        y: 1,
        duration: 0.5,
        ease: "power4.out",
        overwrite: true,
      });
      gsap.to(ref.current.position, {
        x: (-1 + i) * 0.7,
        y: 0,
        duration: 0.5,
        ease: "power4.out",
        overwrite: true,
      });
      gsap.to(ref.current.rotation, {
        x: 0,
        y: -Math.PI / 4,
        duration: 0.5,
        ease: "power4.out",
        overwrite: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicked, i, viewport.width]);

  // move disc
  useEffect(() => {
    if (!disc.current) return;
    if (clicked == i) {
      gsap.to(disc.current.position, {
        x: 1,
        duration: 1,
        ease: "expo.out",
      });
    } else {
      gsap.to(disc.current.position, {
        x: 0,
        duration: 1,
        ease: "expo.out",
      });
    }
  }, [clicked, i]);

  return (
    <group
      ref={ref}
      position={[(-1 + i) * 0.7, 0, 0]}
      rotation={[0, -Math.PI / 4, 0]}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={() => setHovered(false)}
      onClick={(e) => {
        e.stopPropagation();
        if (clicked !== null) setClicked(null);
        else setClicked(i);
      }}
    >
      <mesh>
        <boxGeometry args={[2, 2, 0.1]} />
        <meshPhysicalMaterial toneMapped={false} map={cover} />
      </mesh>
      {/* {clicked == i && ( */}
      <group
        ref={disc}
        scale={6}
        position={[0, 0, -0.05]}
        rotation={[Math.PI / 3.75, 0, 0]}
      >
        <Model />
      </group>
      {/* )} */}
    </group>
  );
};

const Albums = () => {
  const ref = useRef<any>();
  const [selected, set] = useState(0);
  const [clicked, setClicked] = useState<number | null>(null);

  useEffect(() => {
    if (clicked !== null) {
      state.checkoutVisible = true;
      gsap.to(ref.current.position, {
        y: 0,
        duration: 0.5,
        ease: "power4.out",
      });
    } else {
      state.checkoutVisible = false;
      gsap.to(ref.current.position, {
        y: -0.25,
        duration: 0.5,
        ease: "power4.out",
        overwrite: true,
      });
    }
  }, [clicked]);

  return (
    <group ref={ref} position={[0, -0.25, 0]}>
      {records.map((_, i) => (
        <Record
          key={`records-${i}`}
          i={i}
          selected={selected}
          set={set}
          clicked={clicked}
          setClicked={setClicked}
        />
      ))}
    </group>
  );
};

// RECORD MODEL
export function Model(props: any) {
  const { nodes, materials } = useGLTF("/three/vinyl-transformed.glb") as any;
  const [cover] = useTexture(["/three/rufus.jpg"]);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={
          nodes["#REC0002_33_Highway_To_Hell_#REC0002_Textures_0"].geometry
        }
        material={materials.REC0002_Textures}
        rotation={[-0.824, 0, 0]}
      />
    </group>
  );
}

const _ = () => {
  const snap = useSnapshot(state);
  const repeat = Array(3).fill(0);

  useEffect(() => {
    state.checkoutVisible = false;
  }, []);

  useEffect(() => {
    if (snap.checkoutVisible) {
      gsap.to("#vinyl-overlay", {
        opacity: 1,
        duration: 0.25,
        ease: "expo.out",
      });
      gsap.to("#vinyl-underlay", {
        opacity: 0,
        duration: 0.25,
        ease: "expo.out",
      });
    } else {
      gsap.to("#vinyl-overlay", {
        opacity: 0,
        duration: 0.25,
        ease: "expo.out",
        overwrite: true,
      });
      gsap.to("#vinyl-underlay", {
        opacity: 1,
        duration: 0.25,
        delay: 0.25,
        ease: "expo.out",
        overwrite: true,
      });
    }
  }, [snap.checkoutVisible]);

  return (
    <div className="sticky top-0 left-0 right-0 bottom-0 w-full h-full bg-[#ccc] cubes">
      {/* Underlay */}
      <div className="absolute top-6 left-[50%] -translate-x-[50%]">
        <div className="flex items-center gap-4">
          {/* <Marquee autoFill> */}
          <Marquee
            key={"react-marquee"}
            velocity={50}
            direction={"ltr"}
            resetAfterTries={0}
            onInit={() => {}}
            scatterRandomly={false}
            onFinish={() => {}}
          >
            {repeat.map((_, i) => (
              <div
                key={`marquee-${i}`}
                className="flex items-center gap-4 mr-4"
              >
                <div className="uppercase whitespace-nowrap text-[80px] font-semibold [text-shadow:_2px_3px_0_rgb(0_0_0_/_20%)] drop-shadow-xl">
                  Stripe <span className="font-serif italic">Rock</span> Through
                  Time
                </div>
                <Image
                  src="/three/record.png"
                  alt="record"
                  width={32}
                  height={32}
                  className="w-12 h-12 mt-1"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <div id="vinyl-underlay" className="absolute left-4 right-4 bottom-4 flex items-end gap-12">
        <h3 className="uppercase">New Releases</h3>
      </div>

      {/* Three */}
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} intensity={200} color={"white"} />
        <ScrollControls
          horizontal
          pages={1.8}
          damping={0.5}
          enabled={!snap.checkoutVisible}
        >
          <Scroll>
            <Albums />
          </Scroll>
        </ScrollControls>
        {/* <OrbitControls /> */}
      </Canvas>

      {/* Overlay */}
      <div
        id="vinyl-overlay"
        className="absolute left-8 bottom-8 flex flex-col gap-4 w-full max-w-[50%]"
      >
        <div className="flex flex-col">
          <div className="flex w-full justify-between">
            <h3 className="uppercase">Poor Charlie’s Almanack</h3>
            <div className="flex border border-black scale-75">
              <div className="px-4 py-2 border-r border-black bg-[#fe546f] text-white font-semibold cursor-pointer">
                1
              </div>
              <div className="px-4 py-2 opacity-50 font-semibold cursor-pointer">
                2
              </div>
            </div>
          </div>
          <h5>Edited by Peter D. Kaufman</h5>
        </div>
        <div className="w-full h-[1px] bg-[rgba(0,0,0,0.2)]" />
        <div className="flex gap-2 text-black opacity-50">
          <Image
            src="/icons/checkmark.svg"
            alt="checkmark"
            width={16}
            height={16}
            style={{ height: "auto" }}
          />
          In stock!
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center w-full">
            <div className="flex justify-center w-[50%] px-4 py-2 border border-black bg-[#fe546f] text-white font-semibold uppercase cursor-pointer">
              Add to cart
            </div>
            <Image
              src="/icons/heart.svg"
              alt="heart"
              width={24}
              height={24}
              style={{ height: "auto" }}
            />
          </div>
          <h3>$79.99</h3>
        </div>
      </div>
    </div>
  );
};

export default _;

useGLTF.preload("/vinyl-transformed.glb");
