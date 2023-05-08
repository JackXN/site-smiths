import React from 'react';
import {
    Box,
    Text,
    Image
} from '@chakra-ui/react';
import styles from './styles';
import {hero} from '../../../constants/index';

import AnvilLogo from '/AnvilLogo.png'
// import Arrow from '../../Arrow';


const index = () => {
  return (
<Box sx={styles.container}>
<Text as='h1'>
Crafting Beautiful <br/> Websites That <span>Inspire</span> <br/> & Convert
</Text>
<Text as='h2' >{hero[1].title}</Text>
{/* <Text as='h2'>{hero[1].title}</Text> */}

<Box sx={styles.heroImage}>
  <Image src={AnvilLogo} alt='Site-Smiths-Anvil-Logo' 
    height={['64%','64%','25%','25%','25%' ]}
  width={['64%','64%','35%','35%','35%' ]}
  />



</Box>

</Box>
  )
}

export default index
