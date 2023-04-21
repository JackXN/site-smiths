import React, {useState} from 'react';
import {
    Box,
    Flex,
    Text,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useColorMode
  } from "@chakra-ui/react";


import {HamburgerIcon} from '@chakra-ui/icons';

import * as Scroll from 'react-scroll';


const Navbar = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {colorMode, toggleColorMode} = useColorMode();
    const [show,setShow] = useState(null);

    // const router = useRouter();


    const Link = Scroll.Link;


return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      
      wrap="wrap"
      // padding="1.5rem"
      // bg={colorMode === "light" ? "transparent" : "teal.500"}
      // bg='orange'
      color="white"
      // position="absolute"
      position='relative'
      
      top={90}
      right={0}
      left={0}
      zIndex={4}
      display={["flex", "flex", "flex", "flex", "flex", "flex", 'flex']}
    >
      <Box display={{ sm: "block", md: "none" }} onClick={onOpen}>
      
        <IconButton
          icon={<HamburgerIcon/>}
          aria-label="Toggle navigation"
          color="black"
          background="blue.200"
          transition="all 0.3s ease-in-out"
          _hover={{ transform: "scale(1.1)" }}
          onClick={() => setShow(!show)}
          fontSize="25px"
          mt="20px"
          position='relative'
          bottom ='50px'
        />
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={null}
      >
        <DrawerOverlay />
        <DrawerContent bg='orange !important'>
          <DrawerCloseButton />
          <DrawerBody
            display="flex"
            flexDirection="column"
            fontSize={"35px"}
            padding={"30px"}
            margin={"30px"}
            color="black"
          >
            <Link activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              cursor="pointer"
              color='black'>
              
           
                Home
              
            </Link>
            <Link activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              cursor="pointer">
              
                About Us
              
            </Link>
            <Link  activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              cursor="pointer">
              
                Services
              
            </Link>
            <Link activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              cursor="pointer">
              
                Contact Us
              
            </Link>
          
            <Link activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              cursor="pointer">
                Submissions
            </Link>
            <Link activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              cursor="pointer">
                Gallery
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Flex align="center">
        {/* <Image src={Logo} alt='logo' style={{height: '40px', width:'40px',marginTop: '30px'}} /> */}
      </Flex>
      <Box display={{ sm: "block", md: "block" }}>
        <IconButton
          icon="moon"
          display="none"
          onClick={toggleColorMode}
          transition="all 0.3s ease-in-out"
          _hover={{ transform: "scale(1.1)" }}
        />
      </Box>
    </Flex>
)


}



export default Navbar;




  