import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const _ = () => {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        -(state.pointer.x * state.viewport.width + state.viewport.width / 2) / 4,
        0.5 -
          (state.pointer.y * state.viewport.height +
            state.viewport.height / 2) /
            6,
        8.5,
      ],
      0.5,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

export default _;