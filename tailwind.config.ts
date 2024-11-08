/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').PluginCreator} */
import type { Config } from "tailwindcss";
import TailwindForm from "@tailwindcss/forms";
import TailwindAnimate from "tailwindcss-animate";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          "50": "#e8e8e8",
          "100": "#b9b9b9",
          "200": "#979797",
          "300": "#676767",
          "400": "#494949",
          "500": "#1c1c1c",
          "600": "#191919",
          "700": "#141414",
          "800": "#0f0f0f",
          "900": "#0c0c0c",
        },
        secondary: {
          "50": "#e6eef6",
          "100": "#b1cae3",
          "200": "#8bb0d5",
          "300": "#568cc2",
          "400": "#3575b6",
          "500": "#0353a4",
          "600": "#034c95",
          "700": "#023b74",
          "800": "#022e5a",
          "900": "#012345",
        },
        primary: {
          "50": "#e6e8ec",
          "100": "#b2b8c4",
          "200": "#8c96a7",
          "300": "#58667f",
          "400": "#384866",
          "500": "#061a40",
          "600": "#05183a",
          "700": "#04122d",
          "800": "#030e23",
          "900": "#030b1b",
        },
      },
      backgroundImage: {
        grad: "linear-gradient(90deg, #023B74 0%, #568CC2 100%)",
        "grad-alt":
          "linear-gradient(90deg, rgba(2,59,116,0.1) 0%,rgba(86,140,194,0.1) 100%)",
        box: "linear-gradient(180deg, rgba(250,250,250,0.075) 0%, rgba(244,244,244,0.05) 100%)",
        partners:
          "linear-gradient(90deg, #030B1B 10%, rgba(3, 11, 27, 0) 25.4%, rgba(3, 11, 27, 0) 75.3%, #030B1B 90.4%)",
        stats:
          "linear-gradient(180deg, rgba(250, 250, 250, 0.075) 0%, rgba(244, 244, 244, 0.05) 100%)",
        reviews:
          "linear-gradient(90deg, #030B1B 10%, rgba(3, 11, 27, 0) 25.4%, rgba(3, 11, 27, 0) 75.3%, #030B1B 90.4%)",
        footer1:
          "linear-gradient(180deg, rgba(194, 194, 194, 0.02) 64.5%, rgba(194, 194, 194, 0.1) 95.33%)",
        footer2:
          "linear-gradient(180deg, rgba(250, 250, 250, 0.075) 0%, rgba(244, 244, 244, 0.05) 100%)",
        link: "linear-gradient(90deg, rgba(2, 59, 116, 0.15) 0%, rgba(86, 140, 194, 0.15) 100%)",
        field:
          "linear-gradient(180deg, rgba(250, 250, 250, 0.105) 0%, rgba(244, 244, 244, 0.07) 100%)",
        error:
          "linear-gradient(180deg, rgba(250, 0, 0, 0.105) 0%, rgba(244, 0, 0, 0.07) 100%)",
        intern:
          "linear-gradient(90deg, rgba(2, 59, 116, 0.1) 0%, rgba(86, 140, 194, 0.1) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))",
        price:
          "linear-gradient(90deg, rgba(2, 59, 116, 0.1) 0%, rgba(86, 140, 194, 0.1) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))",
        career:
          "linear-gradient(180deg, rgba(250, 250, 250, 0.15) 0%, rgba(244, 244, 244, 0.1) 100%)",
        stack:
          "linear-gradient(180deg, rgba(3, 11, 27, 0) 36.5%, #030B1B 93.5%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        inter: "var(--font-inter)",
        "dm-sans": "var(--font-dm-sans)",
      },
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        "marquee-vertical": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    TailwindAnimate,
    TailwindForm,
    /**
     * @param {import('tailwindcss/types/config').PluginAPI} api
     */
    // function ({ addVariant }) {
    //   // Create a dynamic nth-child variant
    //   for (let i = 1; i <= 10; i++) {
    //     addVariant(`nth-child-${i}`, `&:nth-child(${i})`);
    //   }
    // },
    (api: PluginAPI) => {
      const { addVariant } = api;
      for (let i = 1; i <= 10; i++) {
        addVariant(`nth-child-${i}`, `&:nth-child(${i})`);
      }
    },
    function ({
      addUtilities,
    }: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      addUtilities: (utilities: Record<string, any>) => void;
    }) {
      addUtilities({
        ".no-scrollbar": {
          /* Hide scrollbar for Webkit-based browsers */
          "-webkit-overflow-scrolling": "touch",
          "scrollbar-width": "none" /* Firefox */,
          "-ms-overflow-style": "none" /* IE 10+ */,
          "&::-webkit-scrollbar": {
            display: "none" /* Webkit-based browsers */,
          },
        },
      });
    },
  ],
};
export default config;
