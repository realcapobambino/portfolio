/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    './src/**/*.{vue,js,ts}',
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("tw-elements/dist/plugin.cjs")],

  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'LuckiestGuy': ['Luckiest Guy', 'cursive'],
        'RussoOne': ['Russo One', 'sans-serif'],
        'ShortStack': ['Short Stack', 'cursive'],
      }
    },
  },

}