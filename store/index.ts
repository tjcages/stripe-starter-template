import { proxy } from "valtio";

interface State {
  intro: boolean;

  tabs: { id: number; title: string; color: string, background: string }[];
  selected: number;
  codeOpen: boolean;
  checkoutVisible?: boolean;
}

const state = proxy({
  intro: true,

  tabs: [
    {
      id: 0,
      title: "Roman Empire Emporium",
      color: "black",
      background: "#ccc",
    },
    {
      id: 1,
      title: "Kevin James Costume",
      color: "black",
      background: "#96f",
    },
    {
      id: 2,
      title: "Stripe Vinyl",
      color: "black",
      background: "#ccc",
    },
    {
      id: 3,
      title: "Magic 8 Ball",
      color: "white",
      background: "#0a0a0a",
    },
  ],
  selected: 0,
  codeOpen: false,
  checkoutVisible: false,
} as State);

export { state };
