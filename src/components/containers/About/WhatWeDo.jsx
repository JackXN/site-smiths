import React from "react";

import {
  Box,
  Text,
  Image,
  Icon,
  Link,
  IconButton,
  SimpleGrid,
  Grid,
  GridItem
} from "@chakra-ui/react";
import Tilt from "react-parallax-tilt";
import Button from "../../Button";

// Move all imports into constant files

import { SiAltiumdesigner as DesignIcon } from "react-icons/si";
import { TbSeo as Seo } from "react-icons/tb";
import { BsCodeSlash as Code } from "react-icons/bs";
import { BiBookContent as CMS } from "react-icons/bi";
import { AiOutlineArrowRight as RightArrow } from "react-icons/ai";

const data = [
  {
    id: 1,
    label: "Graphic Design",
    icon: DesignIcon,
    description: "Our graphic design crew is dedicated to bringing a simplistic and sexy look to your website. Chasing that exact feel that your business is looking for. Schedule with us today"
  },

  {
    id: 2,
    label: "SEO Services",
    icon: Seo,
    description: "Our team of developers specialize in search engine optimization. We understand the importance of getting your business as many visitors as it can. That is why we are dedicated to bringing you the best SEO services."
  },
  {
    id: 3,
    label: "Coding Services",
    icon: Code,
    description: "Whatever you need, whether its for personal use or use in your business, we got you covered with services that range from web development to app development. Whatever need you have, we have someone to cover it."
  },
  {
    id: 4,
    label: "Content Management Systems",
    icon: CMS,
    description: "All of our websites have the option to integrate Content management systems. Which means you as a customer can login to a user friendly dashboard and customize whatever content on the site that you want. Making it easy to make changes whenever you need to"
  }
];

const WhatWeDo = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.leftContainer}>
        <hr />
        <Text as="h1" color="#504F50">
          What <br /> We Do <IconButton bg="none" />
        </Text>


        <Image src='/Test.png' alignSelf='flex-end' justifySelf='flex-end'  mt='20px' mb='20px' height={['20%','20%', '50%']} position={[null, null, null, 'relative']}
        top='26%'/>
      </Box>

      <Box sx={styles.rightContainer}>
        <Box sx={styles.contentContainer}>
          <Box sx={styles.paragraph}>
            <Text as="p" mb='40px'>
              Our mission is to create a better digital world and make our
              customers happy. We possess a winning combination of creative,
              technical and people skills that not only make us fun to work
              with, but ensure we get the job done, and done well.
            </Text>
          </Box>


<Box display='flex' flexWrap='wrap'>
{data.map((item, index) => (
  <Box key={index} 
  display='flex'
  justifyContent='center'
  alignItems='center'
  textAlign='center'
  bg='#E04C4C' 
  boxShadow='lg'
  borderRadius='lg'
  margin='20px'
  padding='10px'
  >

<Box display='flex'
justifyContent='center'
alignItems='center'
flexDirection='column'
>
<IconButton icon={<item.icon/>} bg='none' fontSize='40px' color='white'/>
<Text as='h3' fontFamily='Montserrat' fontWeight='bold' fontSize='18px' color='white'>{item.label}</Text>
<Text as='p' paddingLeft={['50px ']} Right={['50px']} color='white' fontFamily='Merriweather' fontWeight='bold' position='relative' bottom='17px'>{item.description}</Text>
</Box>
    </Box>
))}


</Box>




          <Box sx={styles.buttonContainer}>
            <Button text="Read More" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: ["column", "column", "column", "column", "column", "row"],
    textAlign: "left"
  },
  leftContainer: {
    display: "flex",
    // justifyContent: 'center',
    alignItems: [null, null, null, null, null, "center"],
    flex: ["1"],

    flexDirection: "column",

    h1: {
      fontFamily: "Bangers",
      textAlign: "left",
      lineHeight: ["30px"],
      fontSize: ["44px"],
      fontWeight: "lighter"
    },

    hr: {
      width: ["20%", "15%", "10%", "10%"],
      background: "#E04C4C",
      height: "5px",
      mb: ["20px"],
      // position: ['relative'],
      right: ["68px", "68px", "78px", "60px"]
    }
  },

  rightContainer: {
    flex: ["1"]
  },

  titleContainer: {
    // display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#504F50",
    // pt: ['30px'],

    h2: {
      fontSize: ["29px"],
      textAlign: "left !important",
      lineHeight: ["35px"]
    }
  },
  contentContainer: {
    mt: ["20px"],

    p: {
      mt: ["30px"],
      textAlign: "left",
      fontSize: ["14px"],
      fontFamily: "Merriweather",
      fontWeight: "Medium"
    }
  },

  buttonContainer: {
    justifyContent: "left",
    alignSelf: "left",
    display: "flex",
    mt: ["40px"],
    mb: ["80px"],
    fontSize: ["16px"]
  }
};

export default WhatWeDo;
