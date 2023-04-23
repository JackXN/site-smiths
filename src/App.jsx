import { useState } from 'react';
import {Box, Text} from '@chakra-ui/react';





// Components
import Navbar from './components/containers/Navbar/index';
import DesktopNav from './components/containers/Navbar/DesktopNav';
import Hero from './components/containers/Hero/index';
import Anim from './anim/FramerAnimation';
import './App.css'

function App() {
  
  return (
    <>
    <Box>
    <Navbar/>
    <DesktopNav/>
    <Hero/>
    {/* <Anim/> */}
    <a href="https://www.google.com/" className='text-red-400'>Go to Google</a>


    </Box>
    
    </>
  )
}

export default App
