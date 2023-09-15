

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/Pages/**/*.{html,js,tsx,jsx}","./src/components/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}