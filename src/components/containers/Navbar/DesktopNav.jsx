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

import Logo from '/Logo.png';


const DesktopNav = () => {
  const Link = Scroll.Link;

  return (
  <Flex sx={styles.container}>
    <Flex sx={styles.leftContainer}>
    <Image src={Logo} alt='Site Smiths Logo' 
    height={['50%','50%','50%','70%']}
    // width={['50%','50%','50%','20%']}
    />
    {/* <Text as='h3'>Site Smiths</Text> */}
    </Flex>


    <Spacer/>

<Flex sx={styles.rightContainer} >
    <List display='flex'>
        <ListItem mr='20px' padding='10px 8px'>Home</ListItem>
        <ListItem mr='20px' padding='10px 8px'>About</ListItem>
        <ListItem mr='20px' padding='10px 8px'>Services</ListItem>
        <ListItem mr='20px' padding='10px 8px'>Contact</ListItem>
        <ListItem mr='20px' padding='10px 8px'>Gallery</ListItem>
        <ListItem mr='20px' padding='10px 8px'>FAQ</ListItem>
        <ListItem><Text bg='#E04C4C' color='#ffff' padding='10px 8px' >Get A Quote</Text></ListItem>
        
    </List>
</Flex>

  </Flex>
  )

};

export default DesktopNav;