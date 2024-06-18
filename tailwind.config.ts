import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./Containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      customYellow: "#F7D046",
      mainBlue: "#1c73ea",
      colorOne: "rgb(32 50 114 / 90%)",
      colorTwo: "rgb(1 5 16 / 76%)",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },

    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/banner_bg.jpg')",
      },
      keyframes: {
        test: {
          "0%": { top: "-100%" },
          "100%": { top: "0px" },
        },
        opacityKey: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        test: "test .4s ease-in-out",
        opacityKey: "opacityKey 1.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
