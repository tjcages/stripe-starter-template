import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        stripe:
          "0 20px 44px rgba(50,50,93,.12), 0 -1px 32px rgba(50,50,93,.06), 0 3px 12px rgba(0,0,0,.08)",
        stripeReverse:
          "0 -20px 44px rgba(50,50,93,.22), 0 1px 32px rgba(50,50,93,.2), 0 -3px 12px rgba(0,0,0,.08)",
        browser: "0 0.5px 0 #ecf2f7",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
