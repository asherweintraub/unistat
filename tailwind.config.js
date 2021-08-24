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
      red: colors.rose
    },
    extend: {
      gridTemplateColumns: {
        'fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'fit-20': 'repeat(auto-fit, minmax(5rem, 1fr))',
        'fit-28': 'repeat(auto-fit, minmax(7rem, 1fr))',
        'fit-40': 'repeat(auto-fit, minmax(10rem, 1fr))'
      },
      gridColumnEnd: {
        'full': '-1'
      }
    }
  }
}
