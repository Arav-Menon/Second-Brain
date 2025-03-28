/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      purple : {
        600 : "4843de ",
        300 : "e0e7fe",
        500 : "3e38a7" // text 
      }
    },
  },
  plugins: [],
}

