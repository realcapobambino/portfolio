/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    './src/**/*.{vue,js,ts}',
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],

  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}