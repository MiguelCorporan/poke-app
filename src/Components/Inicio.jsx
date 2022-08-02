import { styled } from "@mui/system";
import React from "react";
import styledComponents from "styled-components";
import AllButon from "./AllButon";
import pngwing from "../assets/Img/pngwing.png"

import { AspectRatio, Center, Image, Text } from "@chakra-ui/react";

import pikaa from "../assets/Img/pikaa.png";
import pokee from "../assets/Img/pokee.png";
import AllPoke from "./AllPoke";

const Ini = styledComponents.h2`
    background-color: #d51031;
`;

const Vista = styledComponents.div`
 display: flex;

 img{
   width: 100px;
   heigth: 100px;
 }
`;

const Inicio = ({ Data }) => {
  return (
    <>
      <Center my="4">
        <Image src={pikaa} alt="Nada" w="100" h="100" />
          <Image
            src={pngwing}
            alt="naruto"
            objectFit="cover"
            w="18rem"
          />

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
        >
          Elige tu tipo de pokemon y inicia tu aventura.
        </Text>

      <AllButon Data={Data} />
    </>
  );
};

export default Inicio;
