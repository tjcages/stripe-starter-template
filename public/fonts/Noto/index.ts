import localFont from "next/font/local";

const _ = localFont({
  src: [
    {
      path: "./NotoSerif.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-noto"
});

export default _;
