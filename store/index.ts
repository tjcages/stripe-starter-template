import { proxy } from "valtio";
import { derive } from "valtio/utils";

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
    itemName: string;
    price: number;
  }[];
  selected: number;
  codeOpen: boolean;
  checkoutVisible?: boolean;

  colors: string[];
  musicPlaying: boolean;
  side: "front" | "back";
}

const state = proxy({
  intro: true,
  animation: "start",

  tabs: [
    {
      id: 0,
      title: "/dev/payments",
      icon: "💸",
      color: "black",
      background: "#F0F5FA",
      backgroundDark: "#F0F5FA",
      itemName: "Stripe Shirt",
      price: 2000,
    },
    {
      id: 1,
      title: "Fore$ight",
      icon: "magic",
      color: "white",
      background: "#091012",
      backgroundDark: "#000000",
      itemName: "Stripe Fore$ight",
      price: 5600,
    },
    {
      id: 2,
      title: "Caesar's list",
      icon: "roman",
      color: "black",
      background: "white",
      backgroundDark: "#E0E0E0",
      itemName: "Roman Emperor Desktop Bust",
      price: 4200,
    },
    {
      id: 3,
      title: "WSB Record",
      icon: "vinyl",
      color: "black",
      background: "transparent",
      backgroundDark: "transparent",
      itemName: "Custom Vinyl 7inch",
      price: 5600,
    },
    // {
    //   id: 4,
    //   title: "Kevin James Costume",
    //   icon: "kevin",
    //   color: "black",
    //   background: "#736CFF",
    //   backgroundDark: "#5F5BFF",
    // },
  ],
  selected: 0,
  codeOpen: false,
  checkoutVisible: false,

  musicPlaying: false,
  side: "front",
} as State);

const derived = derive({
  background: (get: (arg0: State) => any) => {
    const snap = get(state);
    return snap.tabs[snap.selected].background;
  },
});

export { state, derived };
