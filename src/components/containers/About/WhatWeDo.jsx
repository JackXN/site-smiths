import React from 'react';

import {
    Box,
    Text,
    Image,
    Icon,
    Link
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


      <Box sx={styles.paragraph} mb='30px'>
        <Text as='p'>
        Our mission is to create a better digital world and make our customers happy.
We possess a winning combination of creative, technical and people skills that not only make us fun to work with, but ensure we get the job done, and done well.
        </Text>
      </Box>


      <div
      className="grid grid-cols-1 gap-8 mt-10 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3 "
    >
      <div className="flex items-start gap-4 rounded-lg border-3">
        <span className="p-4 bg-red-500 rounded-lg shrink-0">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            ></path>
          </svg>
        </span>

        <div>
          <h2 className="text-lg font-bold font-Rale">Graphic Design</h2>

          <p className="mt-1 text-sm text-gray-700 font-Mont">
   Our graphic design services can help elevate your brand with creative and impactful designs. From logos and branding to marketing materials and website design.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
      <span className="p-4 bg-red-500 rounded-lg shrink-0">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            ></path>
          </svg>
        </span>

        <div>
          <h2 className="text-lg font-bold font-Rale">Website & App Development</h2>

          <p className="mt-1 text-sm text-gray-700 font-Mont">
            
Looking to take your business to the next level with a custom website or app? Our expert team of developers can help you create a high-quality digital experience that engages your target audience and drives results.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <span className="p-4 bg-red-500 rounded-lg shrink-0">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            ></path>
          </svg>
        </span>

        <div>
          <h2 className="text-lg font-bold font-Rale">SEO Services</h2>

          <p className="mt-1 text-sm text-gray-700">
          Are you struggling to get your website noticed in search engine results? Our SEO services can help you improve your websites visibility and drive more traffic to your site. 
          </p>
        </div>
      </div>

  

  

     
    </div>




      <Box sx={styles.showcaseContainer}>
<Box sx={styles.leftContainer}>



<Box sx={styles.rightContainer}>
  <Box sx={styles.header}>
<hr/>
    <h1>Elevate Your business
With a <span >professional</span>
Online presence</h1>
  </Box>
</Box>


<Box sx={styles.infoContainer}>
    <Text as='p'>
Looking to take your business to the next level? Consider leveraging the power of a professional online service. With the right partner, you can optimize your digital presence, streamline your operations, and connect with customers like never before. Whether youre a startup looking to establish a foothold or an established business seeking to expand, theres never been a better time to elevate your brand and grow your bottom line with a professional online service. So what are you waiting for? Explore your options today and take your business to new heights!
    </Text>
    <Box sx={styles.buttonContainer}>
<Button text='Read More'/>
</Box>
  </Box>



  
    <figure className='overflow-y-auto overflow-x-hidden h-[550px] w-full lg:max-w-lg mx-auto relative no-scrollbar header-img mt-10'
    style={{
      transform: 'rotateX(20deg)', 
      boxShadow: '4px 8px 24px rgba(0,0,0,.3)',
      borderRadius: '20px',

      transition: '.24s',
      
    }}
  
    >
  <Image src='/showcaseImage.png' alt='project Showcase'   borderRadius='20px'/>
  </figure>

<Box
display='flex'
flexDirection='row'
alignItems='center'
justifyContent='center'
mt={['64px']}
fontSize='20px'
fontFamily='Merriweather'
fontWeight='medium'
>
<Text as='p' mr='10px'><Link href='/Gallery'
fontFamily='Bangers'
fontSize={['24px']}
bg='#E04C4C'
padding='10px'
color='white'
boxShadow='10px 10px rgba(0,0,0,0.2)'
>Check Out Some Of Our Work </Link></Text>
<RightArrow/>
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
    mt: ['160px']
    // mb: ['500px'],
  },

  header: {
    // mt: ['200px'],
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
          fontWeight: 'Medium'
        }
        }

export default WhatWeDo
