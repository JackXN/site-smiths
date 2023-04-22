import React from 'react';
import {
    Box,
    Text,
    Image
} from '@chakra-ui/react';
import styles from './styles';
import {hero} from '../../../constants/index';


const index = () => {
  return (
<Box sx={styles.container}>
<Text as='h1'>
Crafting Beautiful <br/> Websites That Inspire <br/> & Convert
</Text>
</Box>
  )
}

export default index