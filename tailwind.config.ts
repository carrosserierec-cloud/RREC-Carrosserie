import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: "#0A0A0B",
        anthracite: "#1C1E22",
        anthraciteLight: "#2A2D32",
        gris: "#4A4D52",
        grisClair: "#8A8D92",
        creme: "#F5F5F4",
        blanc: "#FFFFFF",
        rouge: {
          DEFAULT: "#C81E2C",
          dark: "#7A0F17",
          vif: "#E63946",
          glow: "#FF4757",
        },
      },
      fontFamily: {
        display: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "spray-gradient":
          "radial-gradient(ellipse at top left, rgba(200,30,44,0.18), transparent 55%)",
        "metal-gradient":
          "linear-gradient(135deg, #2A2D32 0%, #0A0A0B 60%)",
      },
      boxShadow: {
        red: "0 0 40px -8px rgba(200,30,44,0.45)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drip: {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "100%": { transform: "scaleY(1)", transformOrigin: "top" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out forwards",
        drip: "drip 1.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
