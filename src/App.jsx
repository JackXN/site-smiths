import { useState } from 'react';
import {Box, Text} from '@chakra-ui/react';





// Components
// import Navbar from './components/containers/Navbar/index';
// import DesktopNav from './components/containers/Navbar/DesktopNav';
// import Hero from './components/containers/Hero/index';
// import About from './components/containers/About/index'
// import Stepper from './components/common/Stepper';
// import CyberSec from './components/containers/CyberSec/HomeSection';
// import Testimonials from './components/Testimonials';
// import Testimonial from './components/Testimonial';
// import Footer from './components/containers/Footer/Footer';

import ContactForm from './components/containers/ContactForm/ContactForm';





// Layouts
import Homepage from './Layout/Homepage';
import './App.css'

function App() {
  
  return (
    <>
    <Box>
    
 <Homepage/>
    {/* <CyberSec/>
    <Stepper/>
    <Testimonial/>
    <ContactForm/> */}
    </Box>

    


    
    
    </>
  )
}

export default App
