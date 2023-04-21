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
    <DesktopNav/>



    </Box>
    </>
  )
}

export default App
