import { Box, Button, Heading, Image, useDisclosure } from '@chakra-ui/react'
import React,{useEffect,useId,useState} from 'react'

const Pokemon = ({url,setSelected,onOpen}) => {
    const [pokemo, setPokemo] = useState(null)
    

    useEffect(() => {
      
        fetch(url).then(res => res.json()).then(result => setPokemo(result))
    }, [url])
    
  return (
      <>
    {pokemo && 
    <Box boxShadow='outline' rounded="2xl" py="8" key={Math.random()}>
    <Image src={pokemo?.sprites?.front_default} w="150" h="150" />
     <Heading fontSize="2xl">{pokemo.name}</Heading>

     <Button size="md" height="38px" width="80px" my="2" border="2px" borderColor="green.500"
       onClick={() => {
           onOpen()
           setSelected(pokemo)
        }}
        >Detalles</Button>
     </Box> 
    }
    </>
  )
}

export default Pokemon