import React, {useState} from 'react';
import {
    Button,
} from '@chakra-ui/react';



const CustomButton = (text, isSecondary, fontWeight, fontSize, borderRadius,  ) => {

  const buttonProps = {
    bg:'#E04C4C',
    borderRadius: borderRadius ? borderRadius: '5',
    fontFamily: isSecondary ? 'Bangers' : 'Montserrat',
    fontWeight: 'bold',
    fontSize: ['25px', '25px', '30px'], 
    _hover: {
      bg: isSecondary ? 'gray.500' : color ? color : '#EF4444'
    },
    _active: {
      bg: isSecondary ? 'gray.600' : color ? color : '#EF4444'
    },
    _focus: {
      outline: 'none'
    }
  }


    return (
<Button {...buttonProps} isSecondary={isSecondary}>
{isSecondary ?  'Click Here' : text}
    </Button>

    )
  }
  
  


export default CustomButton
