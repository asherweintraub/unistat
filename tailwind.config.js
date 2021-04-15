const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './dist/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'media',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.warmGray,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      red: colors.rose,
    }
  }
}
