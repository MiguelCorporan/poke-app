import { Grid } from "@chakra-ui/react";
import { motion } from "framer-motion";

import React, { memo } from "react";
import Pokemon from "./Pokemon";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const MuestraPokemon = ({ Poke, PokName }) => {
  return (
    <Grid
      templateColumns={[
        "200px",
        "200px 200px",
        "200px 200px 200px 200px",
        "200px 200px 200px 200px 200px",
      ]}
      as={motion.div}
      variants={container}
      initial="hidden"
      animate="show"
      gap={6}
      justifyContent="center"
      mt="4"
      px="8"
      bg="transparent"
    >
      {Poke &&
        Poke.map(({ pokemon: { url } }) => {
          const uid = Math.random();
          return <Pokemon url={url} key={uid} />;
        })}
    </Grid>
  );
};

export default memo(MuestraPokemon);
