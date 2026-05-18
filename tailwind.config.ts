import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bridge: {
          ink: "#0f172a",
          navy: "#0b1b3a",
          blue: "#1a3470",
          sky: "#eef2f8",
          mist: "#f6f8fb",
          line: "#e2e8f0",
          gold: "#c9a24b",
          goldLight: "#f5ecd5",
          green: "#16a34a"
        }
      },
      boxShadow: {
        xs: "0 1px 2px rgba(15,23,42,0.04)",
        card: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -12px rgba(15,23,42,0.08)",
        "card-hover": "0 2px 4px rgba(15,23,42,0.06), 0 16px 32px -12px rgba(15,23,42,0.12)",
        elevated: "0 4px 8px rgba(15,23,42,0.06), 0 24px 48px -16px rgba(11,27,58,0.18)",
        soft: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -12px rgba(15,23,42,0.08)"
      }
    }
  },
  plugins: []
};

export default config;
