module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        xs: '320px',
        sm: "300px",
      },
      maxWidth: {
        sm: '600px',
        xs: '320px',
      },
      colors: {
        primary: 'rgba(17, 17, 17, 0.757)',
        'primary-light': '#19171e',
        'primary-dark': '#010101',
        success: '#0c9361',
        error: '#d33c4f',
        'stop-1': '#e05c3b',
        'stop-2': '#b641ba',
      },
      fontFamily: {
        'lato-light': ["latolight", "sans-serif"],
        'lato-regular': ["latoregular", "sans-serif"],
        'lato-bold': ["latobold", "sans-serif"],
      },
      fontSize: {
        md: '16px',
      },
      opacity: {
        '90': ".9",
      },
      screens: {
        sm: '550px',
        md: '716px',
      },
    },
  },
  plugins: [],
}