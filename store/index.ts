import { proxy } from "valtio";

interface State {
  intro: boolean;
  animation: "start" | "intro" | "end";

  tabs: {
    id: number;
    title: string;
    icon: string;
    color: string;
    background: string;
    backgroundDark: string;
  }[];
  selected: number;
  codeOpen: boolean;
  checkoutVisible?: boolean;
}

const state = proxy({
  intro: true,
  animation: "start",

  tabs: [
    {
      id: 0,
      title: "Rocket Rides",
      icon: "rocket",
      color: "white",
      background: "#15b67c",
      backgroundDark: "#13A46F",
    },
    {
      id: 1,
      title: "Ceasar's List",
      icon: "roman",
      color: "black",
      background: "#eeeeee",
      backgroundDark: "#E0E0E0",
    },
    {
      id: 2,
      title: "Kevin James Costume",
      icon: "kevin",
      color: "black",
      background: "#736CFF",
      backgroundDark: "#5F5BFF"
    },
    {
      id: 3,
      title: "We'resobackman",
      icon: "vinyl",
      color: "black",
      background: "#f0f0f0",
      backgroundDark: "#E0E0E0",
    },
    {
      id: 4,
      title: "Magic 8 Ball",
      icon: "magic",
      color: "white",
      background: "#0a0a0a",
      backgroundDark: "#000000",
    },
  ],
  selected: 0,
  codeOpen: false,
  checkoutVisible: false,
} as State);

export { state };
