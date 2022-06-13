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
        active: '#24202c',
        inactive: '#0c0c0d',
        success: '#0c9361',
        'success-dark': '#0b2c3f',
        error: '#d33c4f',
        'error-dark': '#4c0b13',
        'stop-1': '#e05c3b',
        'stop-2': '#b641ba',
        'stop-3': '#0e0411',
        'stop-4': '#231422',
        'stop-5': '#0a020c',
      },
      fontFamily: {
        'lato-light': ["latolight", "sans-serif"],
        'lato-regular': ["latoregular", "sans-serif"],
        'lato-bold': ["latobold", "sans-serif"],
      },
      fontSize: {
        '2xs': '10px',
        md: '16px',
      },
      opacity: {
        '90': ".9",
      },
      screens: {
        xs: '420px',
        sm: '550px',
        md: '716px',
      },
    },
  },
  plugins: [],
}