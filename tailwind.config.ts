/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#1F2B6C",
        secondary: "#BFD2F8",
        primaryYellow: "#FFDD1C"
      },
      screens: {
        "3xl": "1920px", // Screen width 1920px
      },
    },
  },
};
