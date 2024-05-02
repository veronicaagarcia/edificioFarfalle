/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        white: "#fefdfd",
        gray: "#dfe0df",
        orange: "#fa9336",
        creme: "#f2e2de",
        orangeDark:"#a36c5e",
        black: "#402e32",
        almostWhite: "#fefdfd"
      
      },
      fontFamily: {
        'great-vibes': ['Great Vibes', 'cursive'],
        'lato': ['Lato', 'sans-serif'],
      },
      height: {
        '190': '190px',
        '200': '200px',
        '260': '260px',
        '425': '425px',
        '600': '600px',
        '30v': '30vh',
        '50v': '50vh',
        '70v': '70vh',
        '75v': '75vh',
        '80v': '80vh',
        '85v': '85vh',
        '90v': '90vh',
      },
      width: {
        '200': '200px',
        '350':'350px',
        '400': '400px',
        '600': '600px',
        '50v': '50vw',
        '85v': '85vw',
        '100v': '100vw'
      },
      maxHeight:{
        '500': '500px',
        '90': '90vh',
      },
      maxWidth:{
        '255': '255px',
        '100': '100vw',
      },
    },
  },
  plugins: [],
}

