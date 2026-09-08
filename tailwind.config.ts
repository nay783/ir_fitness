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
        background: {
          DEFAULT: "#080808",
          elevated: "#0f0f0f",
        },
        surface: {
          DEFAULT: "#141414",
          hover: "#1c1c1c",
          muted: "#181818",
        },
        brand: {
          red: {
            DEFAULT: "#E11D48",
            hover: "#F43F5E",
            muted: "rgba(225, 29, 72, 0.15)",
            glow: "rgba(225, 29, 72, 0.35)",
          },
        },
        text: {
          primary: "#F8FAFC",
          secondary: "#94A3B8",
          muted: "#64748B",
        },
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.10)",
          strong: "rgba(225, 29, 72, 0.35)",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "Bebas Neue", "Barlow Condensed", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "Manrope", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      screens: {
        xs: "420px",
      },
      boxShadow: {
        "glow-red": "0 0 25px rgba(225, 29, 72, 0.25)",
        "glow-red-lg": "0 0 50px rgba(225, 29, 72, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
