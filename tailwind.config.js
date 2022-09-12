/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
      minHeight: { 500: "500px" },

      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        "gray-100": "#f2f2ff",
        "gray-light": "#e6e6e6",
        gray: "#AAAABC",
        "gray-dark": "#454555",
        blue: "#1e6dff",
        "blue-dark": "#0553e3",
        black: "#000000",
        red: "#EE0047",
        "red-light": "#FFE4E1",
        "red-dark": "#AD001C",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
