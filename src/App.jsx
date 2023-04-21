import { useState } from 'react';
import {Box, Text} from '@chakra-ui/react';





// Components
import Navbar from './components/containers/Navbar/index';
import DesktopNav from './components/containers/Navbar/DesktopNav';


import './App.css'

function App() {
  
  return (
    <>
    <Box fontFamily={'Gt'}>
    <Navbar/>
    {/* <DesktopNav/> */}
<h1 className='text-yellow-500'>DOES THIS WORK</h1>

    </Box>
    </>
  )
}

export default App
