import { Box } from '@chakra-ui/react';
import {Link} from '@chakra-ui/react';
import React, {useState} from 'react';






const CustomButton = (props) => {
  const [isSecondary, setIsSecondary] = useState(false)

return (
<button
style={{
borderRadius:'5px',
fontFamily: 'Bangers',
color: '#E04C4C',
fontSize: '20px',
padding: '11px 33px 11px 33px',
border: 'solid #E04C4C 2px',
textDecoration: 'none'

}}
>


{props.text}
</button>
)
  
}



export default CustomButton
