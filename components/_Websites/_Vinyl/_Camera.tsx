import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const _ = () => {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [-2 + state.pointer.x * 0.4, 3 + state.pointer.y * 0.4, 5.5],
      0.5,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });

  return null;
};

export default _;
