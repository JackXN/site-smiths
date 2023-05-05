import React from 'react';

import {Box,
Text,
Image,
SimpleGrid,
UnorderedList,
ListItem,
} from '@chakra-ui/react';

import FooterData from './Data';
import styles from './styles';





const Footer = () => {
// Index -1 to select that last item in the array
    const lastItem = Data.slice(-1)[0];

  return (
<Box sx={styles.container}>
  <SimpleGrid columns='4' spacing={5}>
    <Box>
      <Image src='/Logo.png'/>
      <Text as='p'>
        {lastItem.category === 'main' ? lastItem.text : null}
      </Text>
    </Box>
    {FooterData.map((item) => (
      <Box key={item.id}>
        <Text as='h4'>
          {item.category}
        </Text>
        <UnorderedList>
      {FooterData.listItems.map((innerItem) => (
        <ListItem key={innerItem.link}>
            {innerItem.label}
        </ListItem>
      ))}
        </UnorderedList>
      </Box>
    ))}
  </SimpleGrid>
</Box>
  )
}

export default Footer
