module.exports = {
  content: ['*'],
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  
  theme: {
    
    extend: {
fontFamily: {
  'Mont': ['Montserrat'],
  'Bebas': ['Bebas Neue, cursive'],
}


    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
