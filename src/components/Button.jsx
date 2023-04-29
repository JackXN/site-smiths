import React from 'react';
import {
    Button,
} from '@chakra-ui/react';



const Btn = (props, color,margin, padding) => {
  return (
    <Button 
    bg={props.color ? props.color : '#EF4444'} 
    borderRadius='5'
    fontFamily='Montserrat'
    fontSize={['20px', '24px']}

    padding={props.padding ? props.padding : '25px 25px'}
    color='#ffff'
    mb={props.margin}
   >
    {props.text}
    </Button>
  )
}

export default Btn
