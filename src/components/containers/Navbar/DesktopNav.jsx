import React from "react";
import * as Scroll from "react-scroll";
import styles from './DesktopStyles';
import {
  Box,
  Text,
  Link,
  Image,
  UnorderedList,
  Flex,
  ListItem,
  List,
  Spacer
} from "@chakra-ui/react";

import Logo from '/src/Logo.png';


const DesktopNav = () => {
  const Link = Scroll.Link;

  return (
  <Flex sx={styles.container}>
    <Flex sx={styles.leftContainer}>
    <Image src={Logo} alt='Site Smiths Logo' />
    <Text as='h3'>Site Smiths</Text>
    </Flex>


    <Spacer/>

<Flex sx={styles.rightContainer} >
    <List display='flex'>
        <ListItem mr='20px'>Home</ListItem>
        <ListItem mr='20px'>About</ListItem>
        <ListItem mr='20px'>Services</ListItem>
        <ListItem mr='20px'>Contact</ListItem>
        <ListItem mr='20px'>Gallery</ListItem>
        <ListItem mr='20px'>FAQ</ListItem>
        <ListItem><span>Get A Quote</span></ListItem>
        
    </List>
</Flex>

  </Flex>
  )

};

export default DesktopNav;