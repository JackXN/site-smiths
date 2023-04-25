import React from 'react';
import {
    Box,
    Text,
    Image
} from '@chakra-ui/react';
// import Logo from 'src/smallLogo.png'

const WhoWeAre = () => {
  return (
    <Box sx={styles.container}>
    <Box sx={styles.leftContainer}>
      <hr/>
    <Text as='h2' fontSize='50px' color='black'>Who We Are</Text>
    <Image src={'/src/smallLogo.png'}/>
    
    </Box>
        </Box>
  )
}



const styles = {
  container: {

  }
}

export default WhoWeAre
