import { proxy } from "valtio";
import { derive } from "valtio/utils";

interface State {
  mobile: boolean;
  ready: boolean;

  animation: "start" | "intro" | "end";

  tabs: {
    id: number;
    title: string;
    icon: string;
    color: string;
    background: string;
    backgroundDark: string;
    priceObj?: string;
  }[];
  selected: number;
  codeOpen: boolean;
  checkoutVisible?: boolean;

  colors: string[];
  musicPlaying: boolean;
  side: "front" | "back";
}

const state = proxy({
  mobile: false,
  ready: false,

  animation: "start",

  tabs: [
    {
      id: 0,
      title: "/dev/payments",
      icon: "💸",
      color: "black",
      background: "#F0F5FA",
      backgroundDark: "#F0F5FA",
      priceObj: "price_1O1rOMGNGADMMqweACDAjUNI",
    },
    {
      id: 1,
      title: "WSB Records",
      icon: "/vinyl",
      color: "black",
      background: "transparent",
      backgroundDark: "transparent",
      priceObj: "price_1O1yjBDDBH9tvjpxPYrpUJYx",
    },
    {
      id: 2,
      title: "Caesar's List",
      icon: "🏺",
      color: "black",
      background: "white",
      backgroundDark: "#E0E0E0",
      priceObj: "price_1O1ygjIo2OMZnOA7PVzMf4ge",
    },
    {
      id: 3,
      title: "Fore$ight",
      icon: "🎱",
      color: "white",
      background: "#091012",
      backgroundDark: "#000000",
      priceObj: "price_1O1ymyJs1c7tw4aONbl5kqmS",
    },
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
