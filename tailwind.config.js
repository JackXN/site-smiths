
/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    "./node_modules/flowbite/**/*.js"
  ],
 

  theme: {
    extend: {
      colors: {
        primary: '#EDF2F7',
        secondary: '#E04C4C',
        paragraph: '#9D9D9D',
        title: '#0B0B0B',
  
      }
  
  
    },
  },

  fontFamily: {
    poppins: ['Poppins'],
    Lato: ['Lato']
     
  },

  plugins: [require('@tailwindcss/aspect-ratio'),require('flowbite/plugin')],
}








