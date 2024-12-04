/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
};
