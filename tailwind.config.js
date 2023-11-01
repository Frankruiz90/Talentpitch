/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary1: "#1a237e",
        primary2: "#de1c7d",
        primary3: "#d5d9ee",
        textactive: "#ffd54f",
        textpurple: "#9fa8da",
        linegreen: "#8ac149",
        bgpurple: "#E565A5",
        darkgray: "#212121",
        ligthgray:"#666666"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}
