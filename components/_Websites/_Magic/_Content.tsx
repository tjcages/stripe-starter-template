import { forwardRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import Sphere from "./_Sphere";
import Triangle from "./_Triangle";

const _ = forwardRef(function ContentF(
  { ready, holding }: { ready: boolean; holding: boolean },
  ref: any | undefined
) {
  const bulletPoints = [
    { text1: "I predict", text2: "10.5% revenue uplift", scale: 0.6 },
    { text1: "Outlook", text2: "profitable", scale: 1 },
    // { text1: 'If It Is To Be Said,', text2: 'So It Be, So It Is', scale: 0.6 },
    { text1: "VCs say", text2: "ask again later", scale: 0.7 },
    { text1: "Burn rate", text2: "rising", scale: 0.8 },
    { text1: "Code freeze", text2: "predicted", scale: 0.706 },
    { text1: "Try again", text2: "next quarter", scale: 0.8 },
    { text1: "Consult", text2: "your CFO", scale: 0.9 },
    { text1: "Forecast:", text2: "99.999% reliability", scale: 0.6 },
    { text1: "Have you", text2: "considered AI?", scale: 0.7 },
    { text1: "Mind the", text2: "GAAP", scale: 0.9 },
    { text1: "Consider a", text2: "hostile takeover", scale: 0.722 },
    { text1: "Outlook", text2: "bullish", scale: 0.9 },
    { text1: "Forecast:", text2: "Ramen", scale: 0.962 },
    { text1: "Blocked for", text2: "fraud, shake again", scale: 0.622 },
    { text1: "Make it a", text2: "wearable", scale: 0.9 },
    { text1: "Shake to", text2: "pay", scale: 0.9 },
    { text1: "AGI achieved", text2: "internally", scale: 0.7 },
  ];

  useFrame((state, delta) => {
    easing.damp3(ref.current.position, [0, 0.2, 0], 0.5, delta);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={ref}>
      <Sphere ready={ready} />
      <Triangle ready={ready} holding={holding} bulletPoints={bulletPoints} />
    </group>
  );
});

export default _;
