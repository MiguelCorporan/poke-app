import { Box, Center, Flex, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";

const Modals = ({ pok, setPok }) => {
  const {
    name,
    sprites: { front_default, back_default },
  } = pok;
  const tipos = pok.abilities;
  const habilidades = pok.types;
  return (
    <Box
      position="fixed"
      top="30vh"
      left={["10%", "20%", "35%"]}
      py="2rem"
      bg="azure"
      w={["80%", "60%", "30%"]}
      zIndex={9999999}
    >
      <Text as="b">Datos pokemon</Text>
      <h3>{name}</h3>

      <Flex justify="space-between" width="40%" mx="auto">
        <figure>
          <img src={front_default} alt="" />
        </figure>
        <figure>
          <img src={back_default} alt="" />
        </figure>
      </Flex>

      <Flex justify="space-between" width="40%" mx="auto">
        {
          <>
            <div>
              <Text fontSize="xl" mb="2rem" as="b">
                Habilitys
              </Text>
              <List spacing={2}>
                {tipos.map(({ ability }) => (
                  <ListItem>{ability.name}</ListItem>
                ))}
              </List>
            </div>
            <div>
              <Text fontSize="xl" mb="2rem" as="b">
                Tipes
              </Text>
              <List spacing={2}>
                {habilidades.map(({ type }) => (
                  <ListItem>{type.name}</ListItem>
                ))}
              </List>
            </div>
          </>
        }
      </Flex>

      <Center
        position="absolute"
        top="1rem"
        right="1rem"
        w="2.5rem"
        h="2.5rem"
        borderRadius="50%"
        bg="blue.600"
        color="#fff"
        onClick={() => setPok("")}
      >
        X
      </Center>
    </Box>
  );
};

export default Modals;
