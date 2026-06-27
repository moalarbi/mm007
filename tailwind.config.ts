import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        page: "#F6F4F1",
        paper: "#EDE9E3",
        ink: "#041026",
        charcoal: "#212322",
        surface: "#FFFFFF",
        "surface-soft": "#F0EFED",
        ivory: "#041026",
        taupe: "#6B7E92",
        champagne: "#1F466D",
        beige: "#D1C7BA",
        body: "#2A3A50",
        line: "rgba(4,16,38,0.12)"
      },
      boxShadow: {
        glow: "0 18px 45px rgba(4, 16, 38, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
