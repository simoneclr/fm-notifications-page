/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        customRed: "hsl(1, 90%, 64%)",
        customBlue: "hsl(219, 85%, 26%)",
        veryLightGrayishBlue: "hsl(210, 60%, 98%)",
        lightGrayishBlue: "hsl(211, 68%, 94%)",
        lightGrayishBlueTwo: "hsl(205, 33%, 90%)",
        grayishBlue: "hsl(219, 14%, 63%)",
        darkGrayishBlue: "hsl(219, 12%, 42%)",
        veryDarkBlue: "hsl(224, 21%, 14%)"
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}
