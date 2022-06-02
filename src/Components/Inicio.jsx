import { styled } from '@mui/system'
import React from 'react'
import styledComponents from 'styled-components'
import AllButon from './AllButon' 

import { Center,Image,Text } from '@chakra-ui/react'

import pikaa from "../assets/Img/pikaa.png"
import pokee from "../assets/Img/pokee.png"


const Ini = styledComponents.h2`
    background-color: #d51031;
`



const Vista = styledComponents.div`
 display: flex;

 img{
   width: 100px;
   heigth: 100px;
 }
`


const Inicio = ({Data}) => {
  return (
      <>
        <Center my="4">
            <Image src={pikaa} alt="Nada" w="100" h="100" />
            <Text py="2" px="4" fontWeight="black" fontSize="xl" mx="2" aling="center">Elige tu tipo de pokemon y inicia tu aventura.</Text>
            <Image src={pokee} alt="Nado" w="100" h="100"/>
        </Center>

        <AllButon Data={Data} />
      </>
  )
}


export default Inicio