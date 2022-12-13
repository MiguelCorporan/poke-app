import { Box, Button, Heading, Image, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useId, useLayoutEffect, useState } from "react";
import { memo } from "react";
import Modals from "./Modals";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
//import { Button } from "@chakra-ui/react";

const item = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1 },
};

const Pokemon = ({ url, setSelected }) => {
  const [pokemo, setPokemo] = useState(null);

  const [pok, setPok] = useState(false);

  useLayoutEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => setPokemo(result));
  }, [url]);
  const classname = pokemo?.types[0]?.type?.name;

  return (
    <>
      {pokemo && (
        <Box
          boxShadow="2xl"
          rounded="2xl"
          py="8"
          as={motion.div}
          variants={item}
          key={Math.random()}
          /*   w="100%" */
          maxWidth="200"
          className={classname && classname}
        >
          <Image src={pokemo?.sprites?.front_default} w="150" h="150" />
          <Heading fontSize="2xl">{pokemo.name}</Heading>

          {/* <Link to={`pokemons/${pokemo.id}`}>ver mas...</Link> */}

          <Button
            bg="white"
            color="#000"
            _hover={{ bg: "white" }}
            mb="1"
            mx="1"
            mt="1rem"
          >
            <Link to={`pokemons/${pokemo.id}`}>detalles</Link>
          </Button>

          {pok && <Modals pok={pok} setPok={setPok} />}
        </Box>
      )}
    </>
  );
};

export default memo(Pokemon);
