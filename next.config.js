/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["dl.polyhaven.org"],
  },
  env: {
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
    NEXT_PUBLIC_STRIPE_CLIENT_PUBLISHABLE_ROME:
      process.env.NEXT_PUBLIC_STRIPE_CLIENT_PUBLISHABLE_ROME,
    NEXT_PUBLIC_STRIPE_CLIENT_SECRET_ROME:
      process.env.NEXT_PUBLIC_STRIPE_CLIENT_SECRET_ROME,
    NEXT_PUBLIC_STRIPE_CLIENT_PUBLISHABLE_KJ:
      process.env.NEXT_PUBLIC_STRIPE_CLIENT_PUBLISHABLE_KJ,
    NEXT_PUBLIC_STRIPE_CLIENT_SECRET_KJ:
      process.env.NEXT_PUBLIC_STRIPE_CLIENT_SECRET_KJ,
    NEXT_PUBLIC_STRIPE_CLIENT_PUBLISHABLE_VINYL:
      process.env.NEXT_PUBLIC_STRIPE_CLIENT_PUBLISHABLE_VINYL,
    NEXT_PUBLIC_STRIPE_CLIENT_SECRET_VINYL:
      process.env.NEXT_PUBLIC_STRIPE_CLIENT_SECRET_VINYL,
    NEXT_PUBLIC_STRIPE_CLIENT_PUBLISHABLE_MAGIC8:
      process.env.NEXT_PUBLIC_STRIPE_CLIENT_PUBLISHABLE_MAGIC8,
    NEXT_PUBLIC_STRIPE_CLIENT_SECRET_MAGIC8:
      process.env.NEXT_PUBLIC_STRIPE_CLIENT_SECRET_MAGIC8,
    NEXT_PUBLIC_STRIPE_CLIENT_PUBLISHABLE:
      process.env.NEXT_PUBLIC_STRIPE_CLIENT_PUBLISHABLE,
    NEXT_PUBLIC_STRIPE_CLIENT_SECRET:
      process.env.NEXT_PUBLIC_STRIPE_CLIENT_SECRET,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
