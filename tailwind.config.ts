import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"EB Garamond"', "serif"],
        sans: ["Inter", "sans"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#00A28E",
        secondary: "#A20014",
      },
    },
  },
  plugins: [require("tailwindcss-font-inter")],
};
export default config;
