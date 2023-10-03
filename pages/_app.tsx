import "@/styles/_globals.css";

import type { AppProps } from "next/app";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import Sohne from "@/public/fonts/Sohne";

console.log("Made with ❤️ by @tjcages");

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://js.stripe.com/v3/buy-button.js" />
      <div className={Sohne.className}>
        <Component {...pageProps} />
      </div>
      <Analytics />
    </>
  );
}
