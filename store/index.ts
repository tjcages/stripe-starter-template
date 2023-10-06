import { proxy } from "valtio";

interface State {
  intro: boolean;

  tabs: { id: number; title: string; icon: string; color: string; background: string }[];
  selected: number;
  codeOpen: boolean;
  checkoutVisible?: boolean;
}

const state = proxy({
  intro: true,

  tabs: [
    {
      id: 0,
      title: "Ceasar's List",
      icon: "roman",
      color: "black",
      background: "#eeeeee",
    },
    {
      id: 1,
      title: "Kevin James Costume",
      icon: "kevin",
      color: "black",
      background: "#736CFF",
    },
    {
      id: 2,
      title: "We'resobackman",
      icon: "vinyl",
      color: "black",
      background: "#f0f0f0",
    },
    {
      id: 3,
      title: "Magic 8 Ball",
      icon: "magic",
      color: "white",
      background: "#0a0a0a",
    },
  ],
  selected: 0,
  codeOpen: false,
  checkoutVisible: false,
} as State);

export { state };
