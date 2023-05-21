import React from 'react';
import {
    Box,
    Text,
    Image
} from '@chakra-ui/react';
import Button from '../../common/CustomButton';
import styles from './HomeSectionStyles';
import Highlighter from '../../common/Highlighter';



const HomeSection = () => {
  return (
    <>
    <Box sx={styles.container}>
<Box sx={styles.imageContainer}>
    <Image
            src="/CyberSec.png"
              height= {["50%", "20%", "20%", "50%", "90%"]}
              width={["60%", "60%", "60%", "60%", "60%"]}
          />
          </Box>
                <Box sx={styles.contentContainer}>
        <Text as='h1' >
    we ensure <br/>
    <Highlighter text='Safe & Secure'/>
    <br/>
    Products For
    <br/>
    Everyone
        </Text>
<Box sx={styles.buttonContainer}>
        <Button text='See Our Cyber-Sec Policy' />
        </Box>
</Box>
      
</Box>
</>

  )
}


export default HomeSection
