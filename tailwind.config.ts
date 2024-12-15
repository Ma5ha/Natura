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

        primary: {
          DEFAULT: "#00A28E",
          50: "#effefa",
          100: "#c7fff2",
          200: "#90ffe5",
          300: "#51f7d7",
          400: "#1de4c4",
          500: "#04c8ab",
          600: "#00a28e",
          700: "#058072",
          800: "#0a655c",
          900: "#0d544d",
          950: "#003330",
        },
        secondary: "#A20014",
      },
    },
  },
  plugins: [require("tailwindcss-font-inter")],
};
export default config;
