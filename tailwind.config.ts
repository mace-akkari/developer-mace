import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-blue": "#b0e0e6",
        "background-text-color": "#1a1a1a",
        "custom-dark-blue": "#1a4d6d",
        "custom-text-color": "#ffffff",
      },
      spacing: {
        "14": "3.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
