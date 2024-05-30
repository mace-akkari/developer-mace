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
        "background-blue": "#11f3ff",
        "custom-dark-blue": "#288ab7",
      },
      spacing: {
        "14": "3.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
