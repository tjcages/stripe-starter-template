import localFont from "next/font/local";

const _ = localFont({
  src: [
    {
      path: "./scripton_regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-scripton"
});

export default _;
