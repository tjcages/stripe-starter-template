import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

interface Props {
  playing: boolean;
}

const _ = ({ playing }: Props) => {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        -1 + state.pointer.x * 0.4,
        2 + state.pointer.y * 0.4 + (playing ? 2 : 0),
        5,
      ],
      0.5,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });

  return null;
};

export default _;
