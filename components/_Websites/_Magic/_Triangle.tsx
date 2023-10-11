import { useEffect, useState, useRef, useMemo } from "react";
import gsap from "gsap";
import { RenderTexture, PerspectiveCamera } from "@react-three/drei";
import Saying from "./_Saying";

interface Props {
  ready: boolean;
  holding: boolean;
  bulletPoints: { text1: string; text2: string; scale: number }[];
}

const _ = ({ ready, holding, bulletPoints }: Props) => {
  const ref = useRef<any | undefined>();
  const [shuffle, set] = useState(false);
  const random = useMemo(
    () => Math.floor(Math.random() * bulletPoints.length),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [shuffle]
  );

  useEffect(() => {
    if (!ref.current) return;
    if (holding || !ready) {
      gsap.to(ref.current.position, {
        z: 0.5,
        duration: 1,
        ease: "expo.inOut",
        overwrite: true,
      });
      gsap.to(ref.current.rotation, {
        x: Math.PI,
        z: Math.PI,
        duration: 1,
        ease: "expo.inOut",
        overwrite: true,
      });
      gsap.to(ref.current.material, {
        opacity: 0,
        duration: 1,
        ease: "expo.inOut",
        overwrite: true,
        onComplete: () => {
          set(!shuffle);
        },
      });
    } else {
      gsap.to(ref.current.position, {
        z: 0.1,
        // opacity: 1,
        duration: 2,
        ease: "expo.inOut",
      });
      gsap.to(ref.current.rotation, {
        x: -0.1 + random / 100,
        y: -0.1 + random / 100,
        z:
          Math.PI / 4 +
          (random > bulletPoints.length / 2 ? random : -random) / 100,
        // opacity: 0,
        duration: 2,
        ease: "expo.inOut",
      });
      gsap.to(ref.current.material, {
        opacity: 1,
        duration: 3,
        delay: 0,
        ease: "expo.inOut",
      });
    }
  }, [bulletPoints.length, holding, random, ready, shuffle]);

  return (
    <mesh
      ref={ref}
      position={[0, 0, 0.83]}
      rotation={[-Math.PI / 4, 0, Math.PI / 4]}
      scale={0.7}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial
        color="white"
        roughness={1}
        metalness={0.5}
        opacity={1}
        transparent
      >
        <RenderTexture attach="map" anisotropy={16}>
          <PerspectiveCamera
            makeDefault
            manual
            aspect={1 / 1}
            position={[0, 0, 2]}
          />
          <color attach="background" args={["white"]} />
          <Saying
            random={random}
            rotation={[0, 0, Math.PI / 4]}
            bulletPoints={bulletPoints}
          />
        </RenderTexture>
      </meshPhysicalMaterial>
    </mesh>
  );
};

export default _;
