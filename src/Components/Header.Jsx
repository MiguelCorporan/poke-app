import React from "react";
import { Link } from "react-router-dom";

import { Box, Text, Flex } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex bg="red.500" color="yellow.200" justifyContent="space-between" alignItems="center" p="1rem">
      <Text fontSize="2xl">
        Tu PokeApi
      </Text>
      <Flex>
        <Flex as={Link} to="/" pr=".5rem" display="block">Inicio</Flex>
        <Flex as={Link} to="/AllPoke">AllPoke</Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
