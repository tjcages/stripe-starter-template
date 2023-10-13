import {
  EffectComposer,
  Noise,
  N8AO,
  Bloom,
  TiltShift2
} from "@react-three/postprocessing";

const _ = () => {
  return (
    <EffectComposer>
      {/* <Noise opacity={0.025} /> */}
      <N8AO distanceFalloff={1} aoRadius={1} intensity={2} />
      <Bloom
        luminanceThreshold={0}
        mipmapBlur
        luminanceSmoothing={0.0}
        intensity={0}
      />
      {/* <DepthOfField target={[0, 0, 6]} focalLength={0.5} bokehScale={2} height={700} /> */}
    </EffectComposer>
  );
};

export default _;
