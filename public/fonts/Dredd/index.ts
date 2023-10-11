import localFont from "next/font/local";

const _ = localFont({
  src: [
    {
      path: "./dredd.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-dredd"
});

export default _;
