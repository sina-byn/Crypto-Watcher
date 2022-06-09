module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(17, 17, 17, 0.757)',
        success: '#0c9361',
        error: '#d33c4f',
      },
      fontFamily: {
        'lato-light': ["latolight", "sans-serif"],
        'lato-regular': ["latoregular", "sans-serif"],
        'lato-bold': ["latobold", "sans-serif"],
      },
      fontSize: {
        md: '16px',
      },
    },
  },
  plugins: [],
}