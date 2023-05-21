import '../styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'


const breakpoints = [    
  '480px',
  '640px',
  '768px',
  '1024px',
  '1220px',
  '1366px',
  '1620px',]

  const theme = extendTheme({breakpoints})


function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider>
<Component {...pageProps}/>
</ChakraProvider>
  )
}

export default MyApp
