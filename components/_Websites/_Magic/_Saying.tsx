import { Text } from "@react-three/drei";

interface Props {
  random: number;
  rotation: [number, number, number];
  bulletPoints: { text1: string; text2: string; scale: number }[];
}

const _ = ({ random, rotation, bulletPoints }: Props) => {
  return (
    <group rotation={rotation}>
      <Text
        fontSize={0.35 * bulletPoints[random].scale}
        color="black"
        anchorX="center"
        position={[0, 0.2, 0]}
      >
        {bulletPoints[random].text1}
      </Text>
      <Text
        fontSize={0.35 * bulletPoints[random].scale}
        color="black"
        anchorX="center"
        position={[0, -0.2, 0]}
      >
        {bulletPoints[random].text2}
      </Text>
    </group>
  );
};

export default _;
