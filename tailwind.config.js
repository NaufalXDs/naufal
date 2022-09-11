/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    themes: ["halloween", "bumblebee"],
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        Default: "#0ea5e9",
      },
      fontFamily: {
        Poppins: "Poppins",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [require("daisyui")],
};