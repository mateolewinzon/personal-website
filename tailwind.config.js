/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./blog/*.mdx"
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "15rem",
      },
    },
    extend: {
      minHeight: { 500: "500px", 400: "400px", 300: "300px" },

      colors: {
        "blue-dark": "#0553e3",
        black: "#111111",
        'black-800': "#1E1E1E",
        red: "#EE0047",
        "red-light": "#FFE4E1",
        "red-dark": "#AD001C",
        blue: "#1e6dff",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};