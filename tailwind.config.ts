import type { Config } from "tailwindcss";
import TypeSystemPlugin from "./TypeSystemPlugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "2400px",
    },
    extend: {
      fontFamily: {
        fkscreamer: ["var(--font-fkscreamer)", "ui-sans-serif", "system-ui"],
        macan: ["var(--font-macan)", "ui-sans-serif", "system-ui"],
        suisse: ["var(--font-suisse)", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [
    //
    // USAGE:
    //
    // the syntax of the type system is uses a "font" prefix
    // to indicate a reference to a type style.
    //
    // Example Syntax: font-[sans/mono]-[size]
    //
    // eg: font-mono-xs, font-sans-lg, font-sans-sm
    //
    // size could be xs, sm, md, lg, xl, 2xl, 3xl, 4xl
    //
    // TODO: add tablet responsive sizing definition

    TypeSystemPlugin({
      // default base stlying (mobile)
      default: {
        // mono
        h1: {
          "font-family": "var(--font-fkscreamer)",
          "font-size": "113px",
          "line-height": "124px",
          "text-transform": "uppercase",
        },
        body: {
          "font-family": "var(--font-macan)",
          "font-size": "30px",
          "line-height": "40px",
        },
        caption: {
          "font-family": "var(--font-suisse)",
          "font-size": "28.5px",
          "line-height": "40.8px",
        },
      },
    }),
  ],
};
export default config;
