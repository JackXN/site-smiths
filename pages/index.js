import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Homepage from '../src/Layout/Homepage';
import {Container} from '@chakra-ui/react';
import * as Constants from '../constants/index';
import {Box} from '@chakra-ui/react'

export default function Home() {
  console.log(Constants )
  return (
   <>
   
<Homepage/>

   </>
  )
}


