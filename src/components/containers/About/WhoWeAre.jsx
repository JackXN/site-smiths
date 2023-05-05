import React from 'react';
import {
    Box,
    Text,
    Image,
    IconButton,
  } from '@chakra-ui/react';


  import Btn from '../../Button';
import Logo from '/smallLogo.png';
// import About from '../../../constants/index';


const WhoWeAre = () => {
  return (
    <Box sx={styles.container}>
    <Box sx={styles.leftContainer}>
      <hr/>
    <Text as='h1' color='#504F50'>Who <br/> We Are <IconButton bg='none' /></Text>
    </Box>


    <Box sx={styles.rightContainer}>
      <Box sx={styles.contentContainer}>
      <Box sx={styles.titleContainer}>
        <Text as='h2'
        fontFamily='Roboto'
        fontStyle='italic'
        fontWeight='400'
        >
          We Design
        </Text>
        <Text as='h2'
        fontFamily='Lobster, cursive'
        lineHeight='40px'
        >
          Beautiful User Experience
        </Text>
      </Box>

      <Box sx={styles.paragraph}>
        <Text as='p'>
        Our mission is to create a better digital world and make our customers happy.
We possess a winning combination of creative, technical and people skills that not only make us fun to work with, but ensure we get the job done, and done well.
        </Text>
      </Box>


<Box sx={styles.buttonContainer}>
<Btn text='Read More' />
</Box>
      </Box>
    </Box>
        </Box>
  )
} 



const styles = {
  container: {
    display: 'flex',
    flexDirection: ['column', 'column', 'column', 'column' ,'column' , 'row'],
    textAlign: 'left',
  },
  leftContainer: {
    display: 'flex',
    // justifyContent: 'center',
    alignItems: [null,null,null,null,null,'center'],
    flex: ['1'],

    flexDirection: 'column',

    h1: {
      fontFamily: "Bangers",
      textAlign: "left",
      lineHeight: ["30px","30px","30px",],
      fontSize: ["44px", '44px', '44px', '44px'],
      fontWeight: "lighter",
      position:[null,null,null,null,'relative'],
      top: [null,null,null,null,'90px', '150px']
    },

    hr: {
      width: ["20%", "15%", "10%", "10%"],
      background: "#E04C4C",
      height: "5px",
      mb: ["20px"],
      position:[null,null,null,null,'relative'],
      right: ["68px", "68px", "78px", "40px"],
      top: [null,null,null,null,'90px', '150px']
      
    }
  },


  rightContainer: {
    flex: ['1'],
    position:[null,null,null,null,'relative'],
    top: [null,null,null,null,'90px', '150px']
  },


  titleContainer: {
    // display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#504F50',
    // pt: ['30px'],
    



    h2: {
      fontSize: ['29px'],
      textAlign: 'left !important',
      lineHeight: ['35px'],
      
    }

  },
  contentContainer: {
    mt: ['20px'],
  
    p: {
      mt: ['30px'],
      textAlign: 'left',
      fontSize: ['14px'],
      fontFamily: 'Merriweather',
      fontWeight: 'Medium'
    }
  },

  buttonContainer: {
    justifyContent: 'left',
    alignSelf: 'left',
    display: 'flex',
    mt: ['40px'],
    mb: ['80px'],
    fontSize: ['16px']
  }



}

export default WhoWeAre
