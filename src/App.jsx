import { useState } from 'react';
import {Box, Text} from '@chakra-ui/react';





// Components
import Navbar from './components/containers/Navbar/index';
import DesktopNav from './components/containers/Navbar/DesktopNav';
import Hero from './components/containers/Hero/index';
import About from './components/containers/About/index'
import Stepper from './components/Stepper';
import CyberSec from './components/containers/CyberSec/HomeSection';
import Testimonials from './components/Testimonials';
import Testimonial from './components/Testimonial';
import './App.css'

function App() {
  
  return (
    <>
    <Box>
    <Navbar/>
    <DesktopNav/>
    <Hero/>
    <About/>
    <Stepper/>
    <CyberSec/>
    <Testimonial/>

    


    </Box>
    
    </>
  )
}

export default App
