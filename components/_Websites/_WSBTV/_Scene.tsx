import { Canvas } from "@react-three/fiber";
import { MeshReflectorMaterial, BakeShadows } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
  N8AO,
  Noise,
  Vignette
} from "@react-three/postprocessing";
import Computer, { Instances } from "./_Computer";
import CameraRig from "./_Camera";

export default function App() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 20 }}
      eventPrefix="client"
      style={{ position: "absolute" }}
      className="top-0 left-0 right-0 bottom-0"
    >
      <color attach="background" args={["#000"]} />
      <hemisphereLight intensity={0.15} groundColor="orange" />
      <ambientLight intensity={0.2} />
      <spotLight
        position={[10, 20, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <group position={[0, -2, -1.5]}>
        <Instances>
          <Computer />
        </Instances>
        {/* Plane reflections + distance blur */}
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 30]}
            resolution={2048}
            mixBlur={1}
            mixStrength={80}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#202020"
            metalness={0.8}
          />
        </mesh>
        <pointLight
          distance={1.5}
          intensity={2}
          position={[-0.15, 0.7, 0]}
          color="#35c19f"
        />
      </group>
      {/* Postprocessing */}
      <EffectComposer disableNormalPass>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
        <Bloom
          luminanceThreshold={0}
          mipmapBlur
          luminanceSmoothing={0.0}
          intensity={1}
        />
        {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> */}
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
        {/* <DepthOfField
          target={[0, 0, 13]}
          focalLength={0.3}
          bokehScale={15}
          height={700}
        /> */}
      </EffectComposer>
      <CameraRig />
      <BakeShadows />
    </Canvas>
  );
}
