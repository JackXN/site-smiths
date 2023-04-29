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
  <Text as='h1' color='black' className='text-left uppercase leading-11 font-Bebas text-7xl'>Working With <br/> Us Is <span style={{background:'#E04C4C',paddingLeft: '10px', color: 'white'}}>Simple.</span></Text>
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
              fontFamily: 'Bebas Neue',
              textAlign: 'left',
              lineHeight: ['60px'],
              fontSize: ['73px'],
            },
        
          
          },
    }
}




export default Headline
