import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Lightformer } from "@react-three/drei";
import { Leva } from "leva";
import { state } from "@/store";
import Content from "./_Content";
import CameraRig from "./_Camera";

const array = new Array(10).fill(0);

const _ = () => {
  const ref = useRef<any | undefined>();
  const [holding, setHolding] = useState(false);
  const [ready, set] = useState(false);

  useEffect(() => {
    if (ready) return;
    state.checkoutVisible = true;
    gsap.set("#stripe-magic-fade", { opacity: 0, filter: "blur(5px)" });
    array.forEach((_, i) => {
      gsap.set(`#stripe-magic-${i}`, { opacity: 0 });
      gsap.to(`#stripe-magic-${i}`, {
        opacity: 1,
        duration: 0,
        delay: 0.9 + 0.05 * i,
        onComplete: () => {
          gsap.to(`#stripe-magic-${i}`, {
            opacity: 0,
            duration: 0,
            delay: 1 + 0.1 * i,
            onComplete: () => {
              if (!ready) set(true);

              gsap.to("#stripe-magic-fade", {
                opacity: 1,
                filter: "blur(0px)",
                duration: 1,
                delay: 2,
                ease: "expo.out",
              });
            },
          });
        },
      });
    });
  }, [ready]);

  return (
    <Canvas camera={{ position: [0, 0, -5], fov: 45 }}>
      <ambientLight />
      <spotLight
        intensity={0.5}
        angle={0.2}
        penumbra={1}
        position={[5, 15, 10]}
      />
      <Content ref={ref} ready={ready} holding={holding} />
      <Environment
        files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/blue_photo_studio_1k.hdr"
        resolution={512}
        blur={0}
      >
        <Lightformer
          intensity={2}
          rotation-y={Math.PI / 2}
          position={[-50, 2, 0]}
          scale={[100, 2, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-y={-Math.PI / 2}
          position={[50, 2, 0]}
          scale={[100, 2, 1]}
        />
      </Environment>
      <OrbitControls
        enableZoom={false}
        onStart={() => setHolding(true)}
        onEnd={() => setHolding(false)}
      />
      <CameraRig />
      <Leva hidden />
    </Canvas>
  );
};

export default _;
