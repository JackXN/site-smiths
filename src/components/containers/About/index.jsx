import React from 'react';
import {
    Box,
    Text,
    Image
} from '@chakra-ui/react';
import styles from './styles';
import WhoWeAre from './WhoWeAre';
import WhatWeDo from './WhatWeDo';
import Presence from './Presence';
import Stepper from '../../Stepper';
import ServiceDisplay from '../../ServiceDisplay';


const index = () => {
  return (
    <Box sx={styles.container}>
<WhoWeAre/>
<WhatWeDo/>
<ServiceDisplay/>
<Presence/>


    </Box>
  )
}

export default index
