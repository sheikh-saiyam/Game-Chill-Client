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
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"], // Use DaisyUI's predefined themes
  },
};
