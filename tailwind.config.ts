import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#05070d",
        panel: "#0b111d",
        line: "rgba(255,255,255,0.12)",
      },
      boxShadow: {
        glow: "0 0 34px rgba(34, 211, 238, 0.14)",
        lift: "0 24px 70px rgba(0, 0, 0, 0.38)",
      },
      animation: {
        aurora: "aurora 18s ease-in-out infinite alternate",
        float: "float 7s ease-in-out infinite",
      },
      keyframes: {
        aurora: {
          "0%": { transform: "translate3d(-2%, -1%, 0) scale(1)" },
          "100%": { transform: "translate3d(2%, 1%, 0) scale(1.04)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

