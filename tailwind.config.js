/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans' : ['Quicksand', 'sans-serif']
    },
    extend: {
      colors: {
        primary: "#070606",
        secondary: "#818181",
        accent: "#29cc7a",
        white: {
          light: "#ffffff",
          DEFAULT: "#f6f6f6",
          dark: "#f3f3f3 ",
        }
      }
    },
  },
  plugins: [],
}

