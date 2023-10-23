import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

interface Props {
  mobile: boolean;
}

const _ = ({ mobile }: Props) => {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        (state.pointer.x) / 3,
        -0.5 +
          (state.pointer.y * state.viewport.height +
            state.viewport.height / 2) /
            6,
        mobile ? -4.5 : -4.5,
      ],
      0.5,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });

  return null;
};

export default _;
