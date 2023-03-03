/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./blog/*.mdx",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
      keyframes: (theme) => ({
        fadeIn: {
          "0%": { opacity: "0%",  paddingTop: '20px'},
          "100%": { opacity: "100%", paddingTop: '0px'},
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
