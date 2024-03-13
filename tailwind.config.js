/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#fefdfd",
        gray: "#dfe0df",
        orange: "#df964e",
        creme: "#ffede8",
        orangeDark:"#ac7364",
        black: "#0e0e0e",
        almostWhite: "#fefdfd"
      
      },
      height: {
        '200': '200px',
        '425': '425px',
        '50v': '50vh',
        '70v': '70vh',
        '75v': '75vh',
        '80v': '80vh',
        '85v': '85vh',
        '90v': '90vh',
      },
    },
  },
  plugins: [],
}

