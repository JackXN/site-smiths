import React from 'react';
import {
    Box,
    Text,
    Image
} from '@chakra-ui/react';
import styles from './styles';
import {hero} from '../../../constants/index';

import AnvilLogo from '../../../assets/AnvilLogo.png';

const index = () => {
  return (
<Box sx={styles.container}>
<Text as='h1'>
Crafting Beautiful <br/> Websites That <span>Inspire</span> <br/> & Convert
</Text>
{/* <Text as='h2'>{hero[1].title}</Text> */}

<Box sx={styles.heroImage}>
  <Image src={AnvilLogo} alt='Site-Smiths-Anvil-Logo' 
  
  height={['64%']}
  width={['64%']}
  
  />
  
</Box>
<Text as='h2' >{hero[1].title}</Text>
</Box>
  )
}

export default index
