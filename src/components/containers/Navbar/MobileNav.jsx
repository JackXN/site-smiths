import React, { useState, useEffect } from "react";
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
  useColorMode,
  Image
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import * as Scroll from "react-scroll";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [show, setShow] = useState(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [bgColor, setBgColor] = useState(null);
  const [logoColor, setLogoColor] = useState("./assets/images/Logo.png");

  //! OnScroll Function

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ! On scroll also needs to change logo color
  useEffect(() => {
    if (scrollPos > 0) {
      setBgColor("#E04C4C");
      setLogoColor("/LogoWhite.png");
    } else {
      setBgColor(null);
      setLogoColor("/Logo.png");
    }
  }, [scrollPos]);

  
  const Link = Scroll.Link;

  return (
    <Flex
      as="nav"
      alignItems="center"
      justifyContent="center"
      wrap="wrap"
      // padding="1.5rem"
      // bg={colorMode === "light" ? "transparent" : "teal.500"}
      bg={bgColor}
      padding="20px"
      borderRadius="20px"
      color="white"
      // position="absolute"
      position="sticky"
      transition="background-color 0.5s ease-out"
      top={90}
      right={0}
      left={0}
      zIndex={4}
      display={["flex", "flex", "flex", "flex", "none"]}
    >
      <Box display={{ sm: "block", lg: " none" }} onClick={onOpen}>
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Toggle navigation"
          color="black"
          background="none"
          transition="all 0.5s ease-in-out"
          _hover={{ transform: "scale(1.1)" }}
          onClick={() => setShow(!show)}
          fontSize="25px"
          mt="20px"
          position="relative"
          bottom={["10px"]}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        {/* <Text as='h1' fontFamily='Bangers' color='black'>ITE <br/> SMITHS</Text> */}
        <Image
          src={logoColor}
          transition="src 0.5s ease-in"
          alt="Something"
          height="50%"
          width="50%"
          alignSelf="center"
          position="relative"
          right={["25px"]}
        />
      </Box>

      {/* DRAWER */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={null}
      >
        <DrawerOverlay />
        <DrawerContent bg="#E04C4C">
          <DrawerCloseButton color="white" />
          <DrawerBody
            display="flex"
            flexDirection="column"
            fontSize={"35px"}
            padding={"30px"}
            margin={"30px"}
            color="white"
            bg="#E04C4C"
            borderRadius="20px"
            fontFamily="bangers"
          >
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              cursor="pointer"
              color="black"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              cursor="pointer"
            >
              About Us
            </Link>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              cursor="pointer"
            >
              Services
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              cursor="pointer"
            >
              Contact Us
            </Link>

            <Link
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              cursor="pointer"
            >
              Submissions
            </Link>
            <Link
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              cursor="pointer"
            >
              Gallery
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Flex align="center">
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
    // </Box>
  );
};

export default Navbar;
