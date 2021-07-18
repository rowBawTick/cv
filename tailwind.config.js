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
        brand: '#001E47',
        brandDark: '#0A1C4D',
        brandLight: '#008CE9',
        brandLighter: '#0090F5',
        brandLightest: '#BBF1FF',
        lightGrey: '#E9EBEE',
        darkGrey: '#667A8B',
        darkerGrey: '#5E6D7A',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
