/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-lora)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        forest: { DEFAULT: "#3b4a2f", dark: "#2b371f", light: "#566b40" },
        bark: { DEFAULT: "#6b4f3a", dark: "#4a3526", light: "#8a6a4f" },
        truffle: "#221a13",
        cream: "#f6f1e7",
        sand: "#e9dec8",
        moss: "#7d8a5a",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(34,26,19,0.35)",
      },
    },
  },
  plugins: [],
};
