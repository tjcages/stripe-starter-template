import {
  EffectComposer,
  Noise,
  N8AO,
  Bloom,
  DepthOfField,
} from "@react-three/postprocessing";

const _ = () => {
  return (
    <EffectComposer>
      <Noise opacity={0.025} />
      <N8AO distanceFalloff={1} aoRadius={1} intensity={2} />
      <Bloom
        luminanceThreshold={0}
        mipmapBlur
        luminanceSmoothing={0.0}
        intensity={0.25}
      />
      {/* <DepthOfField target={[0, 0, 13]} focalLength={0.3} bokehScale={15} height={700} /> */}
    </EffectComposer>
  );
};

export default _;
