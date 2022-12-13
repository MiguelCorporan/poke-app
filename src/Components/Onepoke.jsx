import React, { useEffect, useState, useLayoutEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Flex,
  Box,
  Center,
  Text,
  VStack,
  Heading,
  List,
  ListItem,
  Button,
} from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";

const Onepoke = () => {
  const { id } = useParams();
  const [poke, setPoke] = useState(null);

  const classname = poke?.types[0]?.type?.name;
  console.log(classname);

  // console.log(poke);

  //const { name, abilities, types, sprites } = poke;
  //console.log(sprites);

  useLayoutEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((result) => setPoke(result));
  }, [id]);

  /*   return (
    <>
      {poke && (
        <Center w="full">
          <Flex bg="red.700" p="16">
            <Image src={sprites.front_default} />
          </Flex>
        </Center>
        )}
        </>
        ) */
  if (poke) {
    return (
      <Center flexDirection="column" minHeight="100vh">
        <VStack
          w={["90%", "85%", "80%", "30%"]}
          boxShadow="2xl"
          p="6"
          rounded="3xl"
          className={classname}
        >
          <Flex bg="" p="4">
            <Image src={poke.sprites.front_default} w="8rem" h="8rem" />
            <Image src={poke.sprites.back_default} w="8rem" h="8rem" />
          </Flex>
          <Heading as="h2" size="2xl">
            {poke.name}
          </Heading>
          <Flex w="60%" justify="space-between">
            <Box>
              <Heading as="h3" size="sm">
                abilities
              </Heading>
              <List listStyleType="none">
                {poke.abilities.map((a) => (
                  <ListItem>{a.ability.name}</ListItem>
                ))}
              </List>
            </Box>

            <Box>
              <Heading as="h3" size="sm">
                types
              </Heading>
              <List listStyleType="none">
                {poke.types.map((a) => (
                  <ListItem>{a.type.name}</ListItem>
                ))}
              </List>
            </Box>
          </Flex>
        </VStack>
        <Box
          as={Link}
          to="/"
          className={classname}
          color="white"
          mt="4"
          rounded=".5rem"
          fontWeight="600"
          px={6}
          py={2}
        >
          back
        </Box>
      </Center>
    );
  }
  return <>no esta</>;
};

export default Onepoke;
