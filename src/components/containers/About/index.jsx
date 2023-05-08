import React from 'react';
import {
    Box,
    Text,
    Image
} from '@chakra-ui/react';
import styles from './styles';
import WhoWeAre from './WhoWeAre';
import WhatWeDo from './WhatWeDo';
import Presence from './ShowCaseSection';
import Stepper from '../../common/Stepper';
import ServiceDisplay from '../../common/ServiceDisplay';


export default function About ()  {
  return (
    <Box sx={styles.container}>
<WhoWeAre/>
<WhatWeDo/>
<ServiceDisplay/>
<Presence/>
    </Box>
  )
}


