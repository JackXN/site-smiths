import React from 'react';

import {
    Box,
    Text,
    Image
} from '@chakra-ui/react';
import Gif from '/src/giphy.gif';
import Btn from '../../Button';


const HomeSection = () => {
  return (
    <>
    <Box sx={styles.container}>
        <Box sx={styles.leftContainer}>
            <Box>
            <Text as='h1' >We Ensure Safe And Secure Products For Every Customer</Text>
            </Box>
            <Text as='p'>
            Our website design and development business takes the security of our clients’ data and our own systems very seriously. This cybersecurity policy outlines the measures we have implemented to protect our business and our clients from cyber threats.
            </Text>

            
        </Box>
        <Btn text='See Our Cyber-Sec Policy'  mb='180px' padding='30px'/>


        <Box sx={styles.rightContainer} mt={['30px']}>
            {/* <Btn text='See Our Cyber-Sec Policy'/> */}
<img src={Gif}/>
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
        flexDirection: ['column'],
        height: '100vh',
        mt: ['200px'],
        
        
    },


    leftContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

        h1: {
            fontFamily: 'Bebas Neue',
            textAlign: 'center',
            lineHeight: ['60px'],
            fontSize: ['73px'],
            mb: ['40px']
            
        },

        p: {
            fontFamily: 'Montserrat',
            fontSize: ['25px'],
            mb: ['40px'],
        }
    },

    rightContainer: {
        display: 'flex',

    }
}

export default HomeSection
