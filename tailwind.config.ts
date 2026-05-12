import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bridge: {
          ink: "#102033",
          navy: "#153e75",
          blue: "#1f6feb",
          sky: "#dbeafe",
          mist: "#f4f8fb",
          line: "#d7e3f1",
          gold: "#d8a31f",
          green: "#1f8a5b"
        }
      },
      boxShadow: {
        soft: "0 14px 40px rgba(16, 32, 51, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
