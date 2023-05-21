import React from 'react'
import Container from '@chakra-ui/react';
const CustomContainer = () => {
  return (
    <Container maxW={['80%','80%', '80%', '80%','50%']}>
      {children}
    </Container>
  )
}

export default CustomContainer
