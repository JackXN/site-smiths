import React from 'react';
import {Box,Text} from '@chakra-ui/react';
// Move all imports into constant files
import { SiAltiumdesigner as DesignIcon } from "react-icons/si";
import { TbSeo as Seo } from "react-icons/tb";
import { BsCodeSlash as Code } from "react-icons/bs";
import { BiBookContent as CMS } from "react-icons/bi";
import { AiOutlineArrowRight as RightArrow } from "react-icons/ai";

const data = [
    {
      id: 1,
      label: "Graphic Design & Branding",
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
      label: "Web Hosting",
      icon: CMS,
      description: "All of our websites have the option to integrate Content management systems. Which means you as a customer can login to a user friendly dashboard and customize whatever content on the site that you want. Making it easy to make changes whenever you need to",
      isMovable: true
    }
  ];

const ServiceDisplay = () => {
  return (
  <Box sx={styles.container}>
{data.map((item, index) => {
    <Box key={index}>


        </Box>
})}

  </Box>
  )
}



const styles = {
    container: {

    }
}
export default ServiceDisplay
