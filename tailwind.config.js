/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    themes: ["dark", "autumn"],
    darkMode: ['[data-mode="dark"]'],
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        Default: "#0ea5e9",
      },
      fontFamily: {
        // sans: ["Patrick Hand", "Arial", "sans-serif"],
        Poppins: ["Poppins"],
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [require("daisyui")],
};
