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

import Button from '../../Button';

// !! Update Component Later
// import Input from './Input'

import styles from './styles';


const ContactForm = () => {

  return (
<Box sx={styles.container}>
<Text as='h1'>Contact</Text>
<Text as='p'>What are you waiting for? Get A Quote Today</Text>

<Box sx={styles.formContainer}>
  
  <FormControl padding={['35']} textAlign='left' mb={10} >
<FormControl  isRequired={true} padding='30px'>
    <FormLabel>First Name</FormLabel>
    <Input type='name' borderRadius='.5rem' bg='' height='50px'  borderWidth='2px' padding='.95rem 3rem' outline='2px solid transparent' transitionDuration='.2s'/>
    
<FormControl isRequired={true} mt={10}> 
    <FormLabel  >Email Address</FormLabel>
    <Input type='email' borderRadius='.5rem' bg='' borderWidth='2px'  height='50px' padding='.75rem 1rem' outline='2px solid transparent' transitionDuration='.2s'/>
    <FormHelperText>We will never share your email</FormHelperText>
    </FormControl>

<FormControl mt={10} >
    <FormLabel>Phone Number</FormLabel>
    <Input type='email' borderRadius='.5rem' bg='' borderWidth='2px' height='50px'  padding='.75rem 1rem' outline='2px solid transparent' transitionDuration='.2s'/>
    <FormHelperText>Optional</FormHelperText>
    </FormControl>


<FormControl as='fieldset' mt={10} borderRadius='.5rem'  borderWidth='2px'  transitionDuration='.2s'>
    <FormLabel as='legend' htmlFor={null} >Custom Message</FormLabel>
    <Textarea placeholder='I would like a...' height='190px' bg='white'/>
 
    </FormControl>
 




</FormControl>

</FormControl>


</Box>
<Button text='Submit'/>

</Box>
      

  )
}

export default ContactForm
