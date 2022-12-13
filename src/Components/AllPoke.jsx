import React, { useEffect, useState, useId, useLayoutEffect } from "react";
import "../App.css";

import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Flex,
  Input,
} from "@chakra-ui/react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const AllPoke = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [term, setTerm] = useState("");

  const [Valor, setValor] = useState([]);

  const navigate = useNavigate();

  const [Selected, setSelected] = useState("");

  const { name, abilities, sprites, types } = Selected;

  useLayoutEffect(() => {
    const TodoPoke = async () => {
      try {
        const URLS = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;
        const Llegados = await fetch(URLS);
        const { results } = await Llegados.json();

        results.map(async ({ url }) => {
          try {
            const data = await fetch(url);
            const res = await data.json();
            setValor((D) => [...D, res]);
          } catch (error) {
            console.log(error);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    TodoPoke();
  }, []);

  const HandleSubmit = (e) => {
    e.preventDefault();
    setValor(e.target.Hola.value);
  };

  const filter = ({ target: { value } }) => setTerm(value);

  return (
    <>
      <Text
        as="h2"
        fontSize="xl"
        fontWeight="semibold"
        textAlign="center"
        my="2"
      >
        AllPOKEs
      </Text>
      <form onSubmit={HandleSubmit}>
        <Input
          type="text"
          name="Hola"
          borderWidth="2px"
          borderColor="black"
          w="4/12"
          ml="4"
          onKeyUp={filter}
        />
      </form>

      <Grid
        templateColumns={[
          "1fr",
          "1fr 1fr",
          "1fr 1fr 1fr 1fr",
          "1fr 1fr 1fr 1fr 1fr",
        ]}
        mt="4"
        placeItems="center"
        justifyItems="center"
      >
        {Valor &&
          Valor.map(({ sprites: { front_default }, name, id }) => {
            return (
              <Flex
                rounded="2xl"
                py="8"
                direction="column"
                align="center"
                boxShadow="2xl"
                maxWidth="200"
                className={name.includes(term) ? "hola" : "filter"}
                key={Math.random()}
              >
                <Image src={front_default} w="150" h="150" mx="auto" />
                <Heading fontSize="2xl" className="name">
                  {name}
                </Heading>
                <Link to={`/pokemons/${id}`}>ver mas...</Link>
              </Flex>
            );
          })}

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent w="100%">
            <ModalHeader fontWeight="black" textAlign="center">
              Datos Pokemon
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody></ModalBody>
            {Selected && (
              <>
                <Text textAlign="center" fontWeight="semibold" fontSize="2xl">
                  {name}
                </Text>
                <Flex flexWrap="wrap">
                  <Image src={sprites.front_default} w="50%" />
                  <Image src={sprites.back_default} w="50%" />
                </Flex>

                <Flex justify="space-between" px="4">
                  <Box>
                    <Text fontWeight="bold">Abilitys</Text>
                    {abilities.map(({ ability }) => (
                      <Text key={Math.random()}>{ability.name}</Text>
                    ))}
                  </Box>
                  <Box>
                    <Text fontWeight="bold">types</Text>
                    {types.map(({ type: { name } }) => (
                      <Text key={Math.random()}>{name}</Text>
                    ))}
                  </Box>
                </Flex>
              </>
            )}
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Grid>
    </>
  );
};

export default AllPoke;
