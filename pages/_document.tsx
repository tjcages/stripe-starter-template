import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preload" href="/assets/air.avif" as="image" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-M8ML49PYNT" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-M8ML49PYNT');
        `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics mode={"production"} />
      </body>
    </Html>
  );
}
