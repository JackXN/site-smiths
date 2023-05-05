import React, {useState} from 'react';


// import {
//     Input 
// } from '@chakra-ui/react';

const CustomInput = (label, placeholder,value) => {

    // const [thevalue, setValue] = useState('');

    const handleChange = (e) => {
     console.log(e.target.value)
    };

  return (
<div>
<label>{label}</label>
<input
type='text'
placeholder={placeholder}
value={value}
onChange={handleChange}
/>
    </div>
)
}

export default CustomInput
