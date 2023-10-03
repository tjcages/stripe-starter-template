import { proxy } from "valtio";

interface State {
  intro: boolean;
  colors: string[];
  decals: string[];
  color: string;
  decal: string;

  codeOpen: boolean;
}

const state = proxy({
  intro: true,
  colors: ["#96f", "#EFBD4E", "#80C670", "#EF674E", "#353934", "#ccc"],
  decals: ["react", "three2", "pmndrs"],
  color: "#96f",
  decal: "three2",

  codeOpen: false,
} as State);

export { state };
