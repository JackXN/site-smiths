import React from 'react';

import {
    Box,
    Text,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Textarea,
    
} from '@chakra-ui/react';


// !! Update Component Later
// import Input from './Input'

import styles from './styles';


const ContactForm = () => {






  return (
<Box sx={styles.container}>
<Text as='h1'>Contact</Text>
<Text as='p'>What are you waiting for? Get A Quote Today</Text>

<Box sx={styles.formContainer}>
  <FormControl padding={['35']} textAlign='left'>
<FormControl  isRequired={true} >
    <FormLabel>First Name</FormLabel>
    <Input type='name' borderRadius='.5rem' bg='' borderWidth='2px' padding='.75rem 1rem' outline='2px solid transparent' transitionDuration='.2s'/>
    
<FormControl isRequired={true}> 
    <FormLabel  >Email Address</FormLabel>
    <Input type='email' />
    <FormHelperText>We will never share your email</FormHelperText>
    </FormControl>

<FormControl>
    <FormLabel>Phone Number</FormLabel>
    <Input type='email'/>
    <FormHelperText>Optional</FormHelperText>
    </FormControl>


<FormControl as='fieldset'>
    <FormLabel as='legend' htmlFor={null}>Custom Message</FormLabel>
    <Textarea placeholder='I would like a...' height='50px'/>
 
    </FormControl>
 




</FormControl>

</FormControl>


</Box>


</Box>
      

  )
}

export default ContactForm
