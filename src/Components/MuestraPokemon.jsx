import { Box, Button, Grid, Heading, Image, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Text,
    Flex, } from "@chakra-ui/react";

import React from "react";
import { useEffect, useState } from "react";

const MuestraPokemon = ({ Poke }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [data, setData] = useState([]);
  const [Selected, setSelected] = useState('')

  const {name,abilities,sprites,types } = Selected

  

  useEffect(() => {
    Poke.map(async ({ pokemon: { url } }) => {
      const Url = await fetch(url);
      const datos = await Url.json();

      setData((D) => [...D, datos]);
    });
  }, []);

 

  return (
    <Grid templateColumns={["1fr","1fr 1fr","1fr 1fr 1fr 1fr","1fr 1fr 1fr 1fr 1fr"]} gap={6} mt="4" px="8">
      {data &&
        data.map(({ sprites: { front_default }, name, id }) => {
           
          return (
            <Box boxShadow='outline' rounded="2xl" py="8">
              <Image src={front_default} w="150" h="150" />
              <Heading fontSize="2xl">{name}</Heading>

              <Button
                size="md"
                height="38px"
                width="80px"
                my="2"
                border="2px"
                borderColor="green.500"
                onClick={() => {
                    onOpen()
                    const finde = data.find( hola => hola.id == id)
                    console.log(finde);
                    setSelected(finde)
                }}
              >
                Detalles
              </Button>
            </Box>
          );
        })}

<Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight="black" textAlign="center">Datos Pokemon</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          </ModalBody>
                    {Selected && <>
                        <Text textAlign="center" fontWeight="semibold" fontSize="2xl" >{name}</Text>
                       <Flex flexWrap="wrap">
                       <Image src={sprites.front_default} w="50%"/>
                        <Image src={sprites.back_default} w="50%"/>
                       </Flex>

                       <Flex justify="space-between" px="4">
                        <Box>
                            <Text fontWeight="bold">Abilitys</Text>
                        {abilities.map(({ability}) => <Text>{ability.name}</Text>)}
                        </Box>
                        <Box>
                        <Text fontWeight="bold">types</Text>
                        {types.map(({type:{name}}) => <Text>{name}</Text>)}
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
  );
};

export default MuestraPokemon;
