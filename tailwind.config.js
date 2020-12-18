const colors = require('tailwindcss/colors')

module.exports = {
  // purge: ["./src/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
      },
    },
  },
  variants: {},
  plugins: [],
}
