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
          50: "#f1f1f1",
          100: "#d9d9d9",
          200: "#c0c0c0",
          300: "#a6a6a6",
          400: "#8d8d8d",
          500: "#737373",
          600: "#595959",
          700: "#404040",
          800: "#262626",
          900: "#0d0d0d",
        },
        base: {
          50: "#e6eef6",
          100: "#b1ccea",
          200: "#86b0d5",
          300: "#5686c2",
          400: "#3575b6",
          500: "#0353a4",
          600: "#034c95",
          700: "#024374",
          800: "#023a56",
          900: "#012d45",
        },
        brand: {
          50: "#e6ecf6",
          100: "#b2bcd4",
          200: "#8e9cbf",
          300: "#58687f",
          400: "#38466e",
          500: "#051a46",
          600: "#031633",
          700: "#041229",
          800: "#030e23",
          900: "#030b11",
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        inter: "var(--font-inter)",
        "dm-sans": "var(--font-dm-sans)",
      },
    },
  },
  plugins: [TailwindAnimate, TailwindForm],
};
export default config;
