import React from 'react';
import 
    MobileNav
 from '../components/containers/Navbar';
 import DesktopNav from '../components/containers/Navbar/DesktopNav';
import Hero from '../components/containers/Hero/index';
import About from '../components/containers/About';


const Homepage = () => {
  return (
<>
<DesktopNav/>
<div>
    <MobileNav/>
      <Hero/>
      <About/>
    </div>
    </>
  )
}

export default Homepage
