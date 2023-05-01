import React from 'react'


import {
    Box,
    Text,
    Image,
    IconButton
} from '@chakra-ui/react';


const Headline = () => {
  return (
    <Box sx={styles.container}>
    <Box sx={styles.leftContainer}>
  <Text as='h1' color='black'
  fontSize={['44px']}
  fontFamily='Bangers'
  lineHeight={['47px']}
  fontWeight='lighter'
  
  
  className='text-left uppercase leading-11 '>Working With <br/> Us Is <span style={{background:'#E04C4C',paddingLeft: '10px', color: 'white'}}>Simple.</span></Text>
  <Text as='p' align={'left'} mt='50px'className='text-5xl font-Bebas leading-11' >This Is How It Goes<span style={{paddingLeft: '10px'}}>...</span></Text>
  </Box>
  </Box>
  )
}


const styles = {
    container: {
        display: 'flex',
        flexDirection: ['column'],



        leftContainer: {
            display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
        
            flexDirection: 'column',
        
            h1: {
              fontFamily: 'Bangers',
              textAlign: 'left',
              lineHeight: ['30px'],
              fontSize: ['44px'],
              fontWeight: 'lighter'
            },
        
          
          },
    }
}




export default Headline
