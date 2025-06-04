/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        white: "#fefdfd",
        gray: "#cccccc",
        orange: "#fa9336",
        creme: "#fff7ef",
        orangeDark: "#a36c5e",
        black: "#402e32",
        almostWhite: "#fefdfd",
        nav: "#ffac92",
        background: "#fefcf9"
      },
      fontFamily: {
        'great-vibes': ['Great Vibes', 'cursive'],
        'lato': ['Lato', 'sans-serif'],
      },
      height: {
        '200': '200px',
        '425': '425px',
      },
      maxHeight:{
        '90': '90vh',
      },
      maxWidth:{
        '100': '100vw',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) { addUtilities({ '.scrollbar-hide': { '-ms-overflow-style': 'none', /* IE and Edge */ 'scrollbar-width': 'none', /* Firefox */ }, '.scrollbar-hide::-webkit-scrollbar': { 'display': 'none' /* Chrome, Safari and Opera */ } }); }
  ],
}

