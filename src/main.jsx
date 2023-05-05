import * as React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client';
import App from './App';
import
 { Analytics } 
from
 
'@vercel/analytics/react'
;

// import 'unfonts.css'




// const theme = extendTheme({
// colors: {
//   brand: {
//     primary: '#EDF2F7',
//     secondary: '#E04C4C',
//     paragraph: '#9D9D9D',
//     title: '#0B0B0B',
//   }
// },

// fonts: {
//   text: {
//     title: 'Lobster'
//   }
  

// }

// })

const breakpoints = [    
  '480px',
  '640px',
  '768px',
  '1024px',
  '1220px',
  '1366px',
  '1620px',]




const theme = extendTheme({breakpoints})



const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
      <Analytics/>
    </ChakraProvider>
  </React.StrictMode>
)