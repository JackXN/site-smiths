import React from 'react';
import {
    Button,
} from '@chakra-ui/react';



const Btn = (props, color) => {
  return (
    <Button 
    bg={props.color ? props.color : '#EF4444'} 
    borderRadius='0'
    fontFamily='inter'
    fontSize='20px'
    padding='25px 25px'
    color='#ffff'
   >
    {props.text}
    </Button>
  )
}

export default Btn
