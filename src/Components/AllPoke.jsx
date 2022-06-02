import React, { useEffect, useState,useId } from 'react'

import '../App.css'

import { Box, Button, Grid, Heading, Image, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Flex,
  Input, } from "@chakra-ui/react";

const AllPoke = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [term, setTerm] = useState("")

  const OD = useId()

  const [Valor, setValor] = useState([])
  //console.log(Valor);

  const [Selected, setSelected] = useState('')

  const {name,abilities,sprites,types } = Selected

  useEffect(() => {
 
    const TodoPoke = async () => {


          try {
            const URLS = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
            const Llegados = await fetch(URLS)
            const {results} = await Llegados.json()
            
            results.map(async ({url}) => {
                
            try {
              const data = await fetch(url)
              const res = await data.json()
              setValor(D => [...D,res])
            } catch (error) {
              console.log(error);
            }
            })

           // setValor(results);
         //   console.log(results);
          } catch (error) {
            console.log(error);
          }
    } 
    TodoPoke()  
  }, [])
  

  const HandleSubmit = (e) => {
    e.preventDefault()
    setValor(e.target.Hola.value)
  }

 /*  const Filtro = (cardFilter, card) => {
        D.addEventListener("keyup", (e) => {
            if (e.target.matches(".Card-filter")) {
                console.log(e.target.value);

                if(e.key === "Escape") e.target.value = ""

              D.querySelectorAll(".card").forEach(el => {
                    el.textContent.toLowerCase().includes(e.target.value) 
                  ? el.classList.remove("filter")
                  : el.classList.add("filter") 


              })
              
            }
        })
} */

const filter = ({target:{value}}) => setTerm(value)

const createBoolean = (text) => {

  const boo = text.includes(term)

  const reverse = !boo

  console.log(reverse);
}

  return (
    <>
      <Text as="h2" fontSize="xl" fontWeight="semibold" textAlign="center" my="2">AllPOKEs</Text>
      <form onSubmit={HandleSubmit}>
        <Input type="text" name="Hola" borderWidth="2px" borderColor="black" w="4/12" ml="4" onKeyUp={filter}/>
      </form>

      <Grid templateColumns={["1fr","1fr 1fr","1fr 1fr 1fr 1fr","1fr 1fr 1fr 1fr 1fr"]} gap={6} mt="4" px="8">

      {Valor &&
        Valor.map(({sprites:{front_default},name,id}) => {
          return (
            <Flex boxShadow='outline' rounded="2xl" py="8" direction="column" align="center"
             className={ name.includes(term) ? "hola" : "filter" } key={Math.random()} >

              <Image src={front_default} w="150" h="150" mx="auto"/>
              <Heading fontSize="2xl" className='name'>{name}</Heading>

              <Button size="md" height="38px" width="80px" my="2" border="2px" borderColor="green.500"
                onClick={() => {
                    onOpen()
                    const finde = Valor.find( hola => hola.id == id)
                    setSelected(finde)
                }}
              >
                Detalles
              </Button>
            </Flex>
          );


        })}

<Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent  w="100%">
          <ModalHeader fontWeight="black" textAlign="center">Datos Pokemon</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
          </ModalBody >
                    {Selected && <>
                        <Text textAlign="center" fontWeight="semibold" fontSize="2xl" >{name}</Text>
                       <Flex flexWrap="wrap">
                       <Image src={sprites.front_default} w="50%"/>
                        <Image src={sprites.back_default} w="50%"/>
                       </Flex>

                       <Flex justify="space-between" px="4">
                        <Box>
                            <Text fontWeight="bold">Abilitys</Text>
                        {abilities.map(({ability}) => <Text key={Math.random()}>{ability.name}</Text>)}
                        </Box>
                        <Box>
                        <Text fontWeight="bold">types</Text>
                        {types.map(({type:{name}}) => <Text key={Math.random()}>{name}</Text>)}
                        </Box>
                       </Flex>
                    </>}
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Grid>


    </>
  )
}

export default AllPoke