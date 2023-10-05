import { proxy } from "valtio";

interface State {
  intro: boolean;
  colors: string[];
  decals: string[];
  color: string;
  decal: string;

  tabs: { id: number; title: string; color: string }[];
  selected: number;
  codeOpen: boolean;
}

const state = proxy({
  intro: true,
  colors: ["#96f", "#EFBD4E", "#80C670", "#EF674E", "#353934", "#ccc"],
  decals: ["react", "three2", "pmndrs"],
  color: "#96f",
  decal: "three2",

  tabs: [
    {
      id: 0,
      title: "Roman Empire Emporium",
      color: "#ccc",
    },
    {
      id: 1,
      title: "Kevin James Costume",
      color: "#96f",
    },
    {
      id: 2,
      title: "Stripe Vinyl",
      color: "#EF674E",
    },
    {
      id: 3,
      title: "Magic 8 Ball",
      color: "#353934",
    },
  ],
  selected: 0,
  codeOpen: false,
} as State);

export { state };
