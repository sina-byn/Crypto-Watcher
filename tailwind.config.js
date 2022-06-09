module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato-light': ["latolight", "sans-serif"],
        'lato-regular': ["latoregular", "sans-serif"],
        'lato-bold': ["latobold", "sans-serif"],
      }
    },
  },
  plugins: [],
}