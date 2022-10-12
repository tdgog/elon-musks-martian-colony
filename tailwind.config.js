/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        starship: 'url("../src/images/starship.webp")',
      }
    },
  },
  plugins: [],
}