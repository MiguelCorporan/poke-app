import React from 'react'
import { Link } from "react-router-dom";

import {Box,Text,Flex} from '@chakra-ui/react'


const Header = () => {
  return (
        <Flex bg="cyan.700" justify="center" alignItems="center">
          <Link to="/" >Inicio</Link>
                   <Text fontSize="2xl" px="1rem">Tu PokeApi</Text>
                <Link to="/AllPoke">AllPoke</Link> 
        </Flex>
  )
}



export default Header