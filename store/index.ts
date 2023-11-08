import { proxy } from "valtio";
import { derive } from "valtio/utils";

interface State {
  mobile: boolean;
  ready: boolean;

  animation: "start" | "intro" | "end";
}

const state = proxy({
  mobile: false,
  ready: false,

  animation: "start",
} as State);

const derived = derive({
  hello: (get: (arg0: State) => any) => {
    return "world";
  },
});

export { state, derived };
