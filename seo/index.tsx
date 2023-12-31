import Head from "next/head";

interface Props {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  favicon?: string;
}

const _ = ({
  title = "Stripe | Embed Stripe Checkout",
  description = "You can now embed our prebuilt payment form directly into your site.",
  image = "https://embedcheckout.com/preview.png",
  url = "https://embedcheckout.com/",
  favicon = "https://embedcheckout.com/favicon.ico",
}: Props) => {
  return (
    <Head>
      <title>{title}</title>
      {/* disable auto phone number detection */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="title" content={title} key="title" />
      <meta name="og:title" content={title} key="og:title" />
      <meta property="og:site_name" content={title} />
      <meta name="description" content={description} key="description" />
      <meta name="og:description" content={description} key="og:description" />
      <meta property="og:url" content={url} key="url" />
      <meta property="og:image" content={image} key="image" />
      {/* Twit */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@stripe" />

      <link rel="icon" type="image/x-icon" href={favicon} />
    </Head>
  );
};

export { _ as SEO };
