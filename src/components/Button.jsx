import React from 'react';
import {
    Button,
} from '@chakra-ui/react';



const Btn = (props) => {
  return (
    <Button 
    bg='#E04C4C' 
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
