import React from 'react';

import {
    Box,
    Text,
    Image
} from '@chakra-ui/react';
import Gif from '/src/giphy.gif';
import Btn from '../../CustomButton';


const HomeSection = () => {
  return (
    <>
    <Box sx={styles.container}>
        <Box sx={styles.leftContainer}>
            <Box>
            <Text as='h1'  >We Ensure <span
            >Safe</span> And <span
             style={{
                background: '#E04C4C',
                color: '#FFFF',
                padding: '6px 5px',
                boxShadow: '3px 4px 0px rgba(0,0,0,0.12)'
             }}
            
            
            >Secure</span> Products For Every Customer</Text>
            </Box>
            <Text as='p'>
            Our website design and development business takes the security of our clients’ data and our own systems very seriously. This cybersecurity policy outlines the measures we have implemented to protect our business and our clients from cyber threats.
            </Text>
        </Box>
      


        <Box sx={styles.rightContainer} mt={['30px']} display='flex' flexDirection='column' jusitfyContent='center' alignItems='center'>
            
     <img src={Gif}/>
     <Btn text='See Our Cyber-Sec Policy'  padding='20px 25px'/>
</Box>
</Box>
</>

  )
}


const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: ['column', 'column', 'column', 'row'],
        height: '100vh',
        // mt: ['200px', '200px', '200px', '200px', null],
    },


    leftContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 2,

        h1: {
            fontFamily: 'Bangers',
            textAlign: 'left',
            lineHeight: ['48px'],
            fontSize: ['44px'],
            fontWeight: 'lighter'
            
        },

        p: {
            fontFamily: 'Merriweather',
            fontSize: ['14px'],
            mb: ['40px'],
            textAlign: 'left',
            mt: ['35px']
        }
    },

    rightContainer: {
        display: 'flex',
        flex:2,
    }
}

export default HomeSection
