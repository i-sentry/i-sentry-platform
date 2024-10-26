import type { Config } from "tailwindcss";
import TailwindForm from "@tailwindcss/forms";
import TailwindAnimate from "tailwindcss-animate";

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
        // SECONDARY
        base: {
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
        // PRIMARY
        brand: {
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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
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
      },
      animation: {
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
    },
  },
  plugins: [TailwindAnimate, TailwindForm],
};
export default config;
