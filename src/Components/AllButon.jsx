import React from 'react'
import {useEffect, useState} from 'react'
import MuestraPokemon from './MuestraPokemon'





import {Flex,Button} from '@chakra-ui/react'

const AllButon = ({Data}) => {
  

  const [Date, setDate] = useState("")
  const [Poke, setPoke] = useState([])
  

  const BuscaPoke = (ID) => {
    setDate(ID)
  }

  useEffect(() => {
    const Url = `https://pokeapi.co/api/v2/type/${Date}`
    
    const Llama = async () => {
        try {
           const Api = await fetch(Url)
            const llegada = await Api.json()
            const {pokemon} = llegada
            setPoke(pokemon)

        } catch (error) {
          console.log(error);
        }
    }
    Llama()
  }, [Date])


  return (
    <center>
        {Data && Data.map(element => {
          const CreteId = `${Math.random()}`
          
           return <Button colorScheme='blue' mb="1" mx="1" onClick={() => BuscaPoke(element.id)} key={CreteId}>{element.name}</Button>        
        })}

        { Poke && <MuestraPokemon Poke={Poke}  />}
    </center>
  )
}

export default AllButon