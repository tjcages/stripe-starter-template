import { useEffect, useRef } from "react";
import gsap from "gsap";
import * as THREE from "three";
import { MeshTransmissionMaterial, Decal, useTexture } from "@react-three/drei";
import { useControls } from "leva";

const _ = ({ ready, ...props }: { ready: boolean }) => {
  const ref = useRef<any | undefined>();
  const [cover, decal] = useTexture(["/three/cover.png", "/three/8.png"]);
  const config = useControls({
    meshPhysicalMaterial: false,
    transmissionSampler: false,
    backside: false,
    samples: { value: 10, min: 1, max: 32, step: 1 },
    resolution: { value: 2048, min: 256, max: 2048, step: 256 },
    transmission: { value: 1, min: 0, max: 1 },
    roughness: { value: 0.13, min: 0, max: 1, step: 0.01 },
    thickness: { value: 3.5, min: 0, max: 10, step: 0.01 },
    ior: { value: 0, min: 1, max: 5, step: 0.01 },
    chromaticAberration: { value: 0.03, min: 0, max: 1 },
    anisotropy: { value: 1, min: 0, max: 1, step: 0.01 },
    distortion: { value: 0.3, min: 0, max: 1, step: 0.01 },
    distortionScale: { value: 0.3, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0.5, min: 0, max: 1, step: 0.01 },
    clearcoat: { value: 1, min: 0, max: 1 },
    attenuationDistance: { value: 3.0, min: 0, max: 10, step: 0.01 },
    attenuationColor: "#ffffff",
    color: "#635bff",
    bg: "#222",
  });

  useEffect(() => {
    if (!ready || !ref.current) return;
    gsap.to(ref.current.rotation, {
      y: Math.PI,
      duration: 2,
      ease: "expo.inOut",
    });
  }, [ready]);

  return (
    <mesh ref={ref} {...props}>
      <sphereGeometry args={[1, 64, 64]} />
      <Decal position={[0, 0, 0.9]} rotation={[0, 0, 0]} scale={3.7} map={cover}>
        <meshPhysicalMaterial
          roughness={0}
          metalness={0.5}
          map={cover}
          lightMapIntensity={0}
          transparent
        />
      </Decal>
      <Decal position={[0, 0, -1]} rotation={[0, 0, 0]} scale={1} map={decal} />
      <MeshTransmissionMaterial
        background={new THREE.Color(config.bg)}
        {...config}
      ></MeshTransmissionMaterial>
    </mesh>
  );
};

export default _;
