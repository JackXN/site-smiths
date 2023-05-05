module.exports = {
  content: ['*'],
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  
  theme: {
    
    extend: {
fontFamily: {
  'Mont': ['Montserrat'],
  'Bebas': ['Bebas Neue'],
  'Rale': ['raleway'],
  'Bang': ['Bangers']
},

colors: {
  'blue': '#EDF2F7'
}


    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
