/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        beige: "#DAC0A3",
        "beige-light": "#F8F0E5",
        "blue-dark": "#102C57",
      },
      fontFamily: {
        serif: ["Lora", "serif"],
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
