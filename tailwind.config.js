// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,css,scss}"
  ],
  theme: {
    extend: {
      colors: {
        pastelWhite: '#FFE9E5',
        pastelPink: '#FFB4B1',
        darkMauve: '#734753',
        pastelPeach: '#FFD5BD',
        softRed: '#F19291',
      }
    }
  },

  safelist: [
    {
      pattern: /bg-(sky|blue|green|red|pastelPink|pastelWhite|darkMauve|pastelPeach|softRed)-[0-9]{3}/,
    },
    {
      pattern: /text-(sky|blue|green|red|white|pastelPink|pastelWhite|darkMauve|pastelPeach|softRed)-[0-9]{3}/,
    },
    {
      pattern: /border-(sky|blue|green|red|pastelPink|pastelWhite|darkMauve|pastelPeach|softRed)-[0-9]{3}/,
    },
  ],


  plugins: [],
}