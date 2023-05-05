import React from 'react';

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
} from '@chakra-ui/react';
import Tilt from 'react-parallax-tilt';
import Button from '../../Button';



// Move all imports into constant files

import { SiAltiumdesigner as DesignIcon} from 'react-icons/si';
import {TbSeo as Seo} from 'react-icons/tb';
import {BsCodeSlash as Code} from 'react-icons/bs'
import {BiBookContent as CMS} from 'react-icons/bi';
import {AiOutlineArrowRight as RightArrow} from 'react-icons/ai';





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
    description: 'test'
  },
{
  id: 3,
  title: 'Coding Services',
  icon: Code,
  description: 'test'
},
{
  id: 4,
  title: 'Content Management Systems',
  icon: CMS,
  description: 'test'
}
];


const WhatWeDo = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.header} >
<hr/>
<Text as='h1'>What</Text>
<Text as='h1'>We Do</Text>
      </Box>
      <Box sx={styles.paragraph} mb='30px'>
        <Text as='p'>
        Our mission is to create a better digital world and make our customers happy.
We possess a winning combination of creative, technical and people skills that not only make us fun to work with, but ensure we get the job done, and done well.
        </Text>
      </Box>
      <Box>
      </Box>
    </Box>
  )
}



const styles = {
  container: {
    display: 'flex',
    flexDirection: ['column', 'column', 'column', 'column' ,'column' , 'row'],

    justifyContent: 'center',
    mt: ['160px']
    // mb: ['500px'],
  },

  header: {
    // mt: ['200px'], 
    display: 'flex',
    // justifyContent: 'center',
    alignItems: [null,null,null,null,null,'center'],
   flexDirection: 'column',
   textAlign: 'left',
    flex: 2,


    hr: {
      width: ['20%', '15%', '10%', '10%'],
      background: '#E04C4C',
      height: '5px',
      mb: ['20px'],
      // position: ['relative'],
      right: ['68px','68px','78px', '60px' ],
    },

    h1: {
      fontFamily: 'Bangers',
      textAlign: 'left',
      lineHeight: ['37px'],
      fontSize: ['44px'],
      color: '#504F50'
    },

  },


  headerTwo: {
    h1: {
      fontFamily: 'Bangers',
      textAlign: 'left',
      lineHeight: ['54px'],
      fontSize: ['44px'],
      color: '#504F50'
    },
  },

  iconContainer: {
    // bg: '#2C2C2C',
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
    

    p: {
fontSize: ['14px'],
fontFamily: 'Merriweather'
    },


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

  rightContainer: {
    
    
    span: {
      background: '#E04C4C',
      color: '#FFF',
      padding: ['8px 19px'],
      boxShadow: '3px 4px 0px rgba(0,0,0,0.12)'
    }
  },


  showcaseContainer: {
    mt: ['150px'],
    display: 'flex',
    // flexDirection: ['column-reverse'],
    flexDirection: ['column']

  },

  leftContainer: {
    position: 'relative',
    top: ['150px']
        },


        infoContainer: {
          

          p: {
            mt: ['30px'],
            mb: '40px',
      textAlign: 'left',
      fontSize: ['14px'],
      fontFamily: 'Merriweather',
      fontWeight: 'medium',
          },

          buttonContainer: {
          justifyContent: 'left',
          alignSelf: 'left',
          display: 'flex',
          mt: ['40px'],
          mb: ['80px'],
          fontSize: ['30px']        }
        },


        paragraph: {
          mt: ['30px'],
          textAlign: 'left',
          fontSize: ['14px'],
          fontFamily: 'Merriweather',
          fontWeight: 'Medium',
          flex: 2
        }
        }

export default WhatWeDo
