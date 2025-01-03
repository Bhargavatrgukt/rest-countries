/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "hsl(209, 23%, 22%)",
        veryDarkBlue: {
          bg: "hsl(207, 26%, 17%)",
          text: "hsl(200, 15%, 8%)",
        },
        darkGray: "hsl(0, 0%, 52%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
      fontSize: {
        sm: ["14px", "1.5"], // Homepage Items
        base: ["16px", "1.5"], // Detail Page
      },
    },
  },
  plugins: [],
};
