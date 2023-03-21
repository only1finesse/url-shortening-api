/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "778px",
        lg: "960px",
        lgl: "1000px",
        xl: "1280px",
      },
      colors: {
        primaryCyan: '#2acfcf',
        primaryViolet: 	'#3b3054',
        secondaryRed: '#f46262',
        neutralGray: '#bfbfbf',
        neutralBlue: '#35323e',
        grayViolet: '#9e9aa7',
        darkViolet: '#232127',
      },
      fontFamily: {
        body: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}