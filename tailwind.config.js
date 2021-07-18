module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: '#0090F5',
        brandDark: '#003691',
        brandDarker: '#001E47',
        brandDarkest: '#0A1C4D',
        brandLight: '#008CE9',
        brandLightest: '#BBF1FF',
        lightGrey: '#E9EBEE',
        darkGrey: '#667A8B',
        darkerGrey: '#5E6D7A',
      },
      spacing: {
        '0.75': '0.1875rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
