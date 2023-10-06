import "@/styles/_globals.css";

import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import Sohne from "@/public/fonts/Sohne";
import Scripton from "@/public/fonts/Scripton";

console.log("Made with ❤️ by @tjcages");

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={`${Sohne.className} ${Scripton.variable}`}>
        <Component {...pageProps} />
      </div>
      <Analytics />
    </>
  );
}
