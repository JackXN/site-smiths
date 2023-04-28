import React from 'react';

import {
    Box,
    Text,
    Image,
    Icon
} from '@chakra-ui/react';
import Tilt from 'react-parallax-tilt';


import { SiAltiumdesigner as DesignIcon} from 'react-icons/si';
import {TbSeo as Seo} from 'react-icons/tb';
import {BsCodeSlash as Code} from 'react-icons/bs'
import {BiBookContent as CMS} from 'react-icons/bi';





const data = [
  {
    id: 1,
    title: 'Graphic Design',
    icon: DesignIcon,
    description: ''
  },

  {
    id: 2,
    title: 'SEO Services',
    icon: Seo,
    description: ''
  },
{
  id: 3,
  title: 'Coding Services',
  icon: Code,
  description: ''
},
{
  id: 4,
  title: 'Content Management Systems',
  icon: CMS,
  description: ''
}
];


const WhatWeDo = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
<hr/>
<Text as='h1'>What</Text>
<Text as='h1'>We Do</Text>
      </Box>

      <Box sx={styles.iconContainer}>
      {data.map((item, index) => (
        <Box key={item.id} sx={styles.icons} margin={['30px']}>
         <Icon 
         as={item.icon} 
         color='white'
         fontSize={['80px']}
         />
         <Text as='h3'>
          {item.title}
         </Text>
          </Box>
      ))}
      </Box>



      <Box sx={styles.showcaseContainer}>
<Box sx={styles.leftContainer}>
  
    <figure className='overflow-y-auto h-[550px] w-full lg:max-w-lg mx-auto relative no-scrollbar header-img'
    style={{
      transform: 'rotateX(20deg)', 
      boxShadow: '4px 8px 24px rgba(0,0,0,.3)',
      borderRadius: '20px',
      transition: '.24s'
    }}
    
    >
  <Image src='/src/showcaseImage.png' alt='project Showcase'  transform= {[null,'skew(6deg,5deg)']} borderRadius='20px'/>
  </figure>
  
</Box>


<Box sx={styles.rightContainer}>
  <Box sx={styles.header}>
<hr/>
    <h1>Elevate Your business
With a professional
Online presence</h1>
  </Box>
</Box>
      </Box>
    </Box>
  )
}



const styles = {
  container: {
    display: 'flex',
    flexDirection: ['column'],
    justifyContent: 'center',
  },

  header: {
    mt: ['200px'],
// flex: 2,
    hr: {
      width: ['20%', '15%', '10%', '10%'],
      background: '#E04C4C',
      height: '5px',
      mb: ['20px'],
      // position: ['relative'],
      right: ['68px','68px','78px', '60px' ],
    },

    h1: {
      fontFamily: 'Bebas Neue, cursive',
      textAlign: 'left',
      lineHeight: ['60px'],
      fontSize: ['73px'],
    },

  },

  iconContainer: {
    bg: '#E04C4C',
    width: '100%',
    padding: ['25px'],
    borderRadius: '20px',
    mt: ['50px'],
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: ['column', 'row'],
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // flex: ['6'],
    


    h3: {
      fontSize: ['23px'],
      color: '#EDF2F7',
      mt: ['16px'],
      fontFamily: 'Roboto',
      fontWeight: 'bold'
    },


    icons: {
      margin: ['50px']
      
    }
  },



  showcaseContainer: {
    mt: ['150px'],
    display: 'flex',
    flexDirection: ['column-reverse'],
  },

  leftContainer: {
    position: 'relative',
    top: ['150px']
        },
}

export default WhatWeDo
