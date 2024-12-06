/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enables class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: "#c34a75",
        bgPrimary: "#fdf9fb",
        secondary: "#e597b3",
        accent: "#df5485",
        // for dark
        darkPrimary: "#bd2e62",
        darkBgPrimary: "#2a2a2b",
        darkSecondary: "#6f1636",
        darkAccent: "#af184f",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"], // Use DaisyUI's predefined themes
  },
};
