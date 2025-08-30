// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,css,scss}"
  ],
  theme: {
    extend: {
      //Paletas de colores de MinePet
      colors: {
        pastelWhite: '#FFE9E5',
        pastelPink: '#FFB4B1',
        darkMauve: '#734753',
        pastelPeach: '#FFD5BD',
        softRed: '#F19291',
      }
    }
  },
  plugins: [],
}