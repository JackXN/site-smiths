import React from 'react';
import 
    MobileNav
 from '../components/containers/Navbar/MobileNav';
 import DesktopNav from '../components/containers/Navbar/DesktopNav';
import Hero from '../components/containers/Hero/index';
import About from '../components/containers/About';
import { Container } from '@chakra-ui/react';
import ServiceDisplay from '../components/common/ServiceDisplay';
import CyberSec from '../components/containers/CyberSec/HomeSection';

import Stepper from '../components/common/Stepper';
import Testimonial from '../components/common/Testimonial';

const Homepage = () => {
  return (
<>
<DesktopNav/>
    <MobileNav/>
    <Container maxW='80%'>
      <Hero/>
      <About/>
    <Stepper/>
    <CyberSec/>
      <Testimonial/>
      </Container>
    </>
  )
}

export default Homepage
