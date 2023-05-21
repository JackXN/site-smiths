import React from 'react';
import {Box,Text, Image, SimpleGrid, Wrap,WrapItem} from '@chakra-ui/react';
// Move all imports into constant files
import { SiAltiumdesigner as DesignIcon } from "react-icons/si";
import { TbSeo as Seo } from "react-icons/tb";
import { BsCodeSlash as Code } from "react-icons/bs";
import { BiBookContent as CMS } from "react-icons/bi";
import { AiOutlineArrowRight as RightArrow } from "react-icons/ai";
import Highlighter from './Highlighter';
const data = [
    {
      id: 1,
      label: "Graphic Design & Branding",
      icon: DesignIcon,
      description: "Our graphic design crew is dedicated to bringing a simplistic and sexy look to your website. Chasing that exact feel that your business is looking for. Schedule with us today",
      icon: '/GraphicIcon.png'
    },
  
    {
      id: 2,
      label: "SEO Services",
      icon: Seo,
      description: "Our team of developers specialize in search engine optimization. We understand the importance of getting your business as many visitors as it can. That is why we are dedicated to bringing you the best SEO services.",
      icon: '/SEOIcon.png'
    },
    {
      id: 3,
      label: "Coding Services",
      icon: Code,
      description: "Whatever you need, whether its for personal use or use in your business, we got you covered with services that range from web development to app development. Whatever need you have, we have someone to cover it.",
      icon: '/softwaredevIcon.png'
    },
    {
      id: 4,
      label: "Web Hosting",
      icon: CMS,
      description: "All of our websites have the option to integrate Content management systems. Which means you as a customer can login to a user friendly dashboard and customize whatever content on the site that you want. Making it easy to make changes whenever you need to",
      isMovable: true,
      icon: '/HostingIcon.png'
    }
  ];

const ServiceDisplay = () => {
  return (
    <>
    <Text as='h1' sx={styles.title}>Our Services</Text>
    <Box sx={styles.container}>
      
{data.map((item, index) => (
        <Box sx={styles.cardContainer} key={index} >
        <Image src={item.icon}  width={['35%','35%','15%']} margin='10px'/>
        <Text as='h1'>{item.label}</Text>
        <Text as='p'>{item.description}</Text>
                </Box>
))}
    </Box>
    </>
  )
}



const styles = {
    container: {
display: 'flex',
flexWrap:'wrap',
flexDirection: ['column', 'column', 'column', 'row'],
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#1D2129',
// backgroundColor: 'white'
borderRadius: '25px',
padding: '25px'
    },

    
    
    title: {
      fontFamily: 'Bangers',
      color:'#504F50',
      fontSize: '44px',
      mt: ['150px', '150px', '50px', '0px'],
      textAlign: 'left',
      mb: '50px',
    },

    cardContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      // padding: '30px 50px 30px 50px',
      


      h1: {
        fontFamily: 'Paytone one',
        fontSize: ['20px'],
        color: 'white',
      
      },
      
      p: {
        fontFamily: 'Merriweather',
        fontWeight: '400px',
        fontSize: '14px',
        color: 'white',
        padding: '20px 50px 20px 50px',
      
      }
      
    },

    box: {
        background: '#1F242F',
        color: 'white',
        margin: '50px',
        width: '50%',
        padding: ['80px'],
        textAlign: 'center',
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '30px',





    }
}
export default ServiceDisplay
