import React from 'react';
import {
    Box,
    Text,
    Image
} from '@chakra-ui/react';
import styles from './styles';
import WhoWeAre from './WhoWeAre';

const index = () => {
  return (
    <Box sx={styles.container}>
<WhoWeAre/>
    </Box>
  )
}

export default index
