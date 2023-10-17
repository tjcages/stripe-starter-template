import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preload" href="/assets/air.avif" as="image" />
        <Script
          id="google-analytics"
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-M8ML49PYNT"
        />
        <Script
          id="google-analytics-gtag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-M8ML49PYNT');`,
          }}
        />
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','G-M8ML49PYNT');
          `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics mode={"production"} />
      </body>
    </Html>
  );
}
