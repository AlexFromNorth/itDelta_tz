import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111827",
        lightPrimary: "#374151",
        grey: "#6B7280",
        darkBlue: "#4F46E5",
        black: "#000000",
        white: "#ffffff"
      },
    },
  },
  plugins: [],
};
export default config;
