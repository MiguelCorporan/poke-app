import React, { memo } from "react";
import AllButon from "./AllButon";
import pngwing from "../assets/Img/pngwing.png";

import { Center, Image, Text } from "@chakra-ui/react";

import pikaa from "../assets/Img/pikaa.png";
import pokee from "../assets/Img/pokee.png";

const Inicio = ({ Data }) => {
  return (
    <>
      <Center mb="4" pt="8">
        <Image src={pikaa} alt="Nada" w="100" h="100" />
        <Image src={pngwing} alt="naruto" objectFit="cover" w="18rem" />

        <Image src={pokee} alt="Nado" w="100" h="100" />
      </Center>
      <Text
        py="2"
        px="4"
        fontWeight="black"
        fontSize="xl"
        mx="2"
        mb="1rem"
        aling="center"
        color="#fff"
      >
        Elige tu tipo de pokemon y inicia tu aventura.
      </Text>

      <AllButon Data={Data} />
    </>
  );
};

export default memo(Inicio);
