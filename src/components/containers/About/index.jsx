import React from 'react';
import {
    Box,
    Text,
    Image
} from '@chakra-ui/react';
import styles from './styles';
import WhoWeAre from './WhoWeAre';
import WhatWeDo from './WhatWeDo';

const index = () => {
  return (
    <Box sx={styles.container}>
<WhoWeAre/>
<WhatWeDo/>
    </Box>
  )
}

export default index
