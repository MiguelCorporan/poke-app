import React from 'react'
import {useEffect, useState} from 'react'
import MuestraPokemon from './MuestraPokemon'





import {Flex,Button} from '@chakra-ui/react'

const AllButon = ({Data}) => {
  

  const [Date, setDate] = useState()
  const [Poke, setPoke] = useState(false)

  const BuscaPoke = (ID) => {
    setDate(ID)

    console.log(ID);
  }

  useEffect(() => {
    const Url = `https://pokeapi.co/api/v2/type/${Date}`
    
    const Llama = async () => {
        try {
           const Api = await fetch(Url)
            const llegada = await Api.json()
            const {pokemon} = llegada
            setPoke(pokemon)
            console.log(Poke);

        } catch (error) {
          console.log(error);
        }
    }
    Llama()
  }, [Date])


  return (
    <center>
        {Data && Data.map(element => {
          
           return <Button colorScheme='blue' mb="1" mx="1" onClick={() => BuscaPoke(element.id)}>{element.name}</Button>        
        })}

        { Poke && <MuestraPokemon Poke = {Poke}  />}
    </center>
  )
}

export default AllButon