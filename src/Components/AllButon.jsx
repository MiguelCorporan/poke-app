import React, { memo, useLayoutEffect } from "react";
import { useEffect, useState } from "react";
import MuestraPokemon from "./MuestraPokemon";
import { Select } from "@chakra-ui/react";

import { Button } from "@chakra-ui/react";

const AllButon = ({ Data }) => {
  const [Date, setDate] = useState("water");
  const [Poke, setPoke] = useState([]);
  const [PokName, setPokName] = useState(null);
  console.log(PokName);

  const BuscaPoke = (ID) => {
    setDate(ID);
  };

  useLayoutEffect(() => {
    const Url = `https://pokeapi.co/api/v2/type/${Date}`;
    const Llama = async () => {
      try {
        const Api = await fetch(Url);
        const llegada = await Api.json();
        const { pokemon } = llegada;
        setPoke(pokemon);
      } catch (error) {
        console.log(error);
      }
    };
    Llama();
  }, [Date]);

  return (
    <center>
      <Select
        onChange={(e) => {
          const value = e.target.value;
          BuscaPoke(value);
        }}
        alignSelf="flex-start"
        size="md"
        w={["60%", "30%"]}
        placeholder="select one type"
        color="#fff"
      >
        {Data &&
          Data.map((element) => {
            const CreteId = `${Math.random()}`;
            // setPokName(element.name);
            if (element.name == "unknown" || element.name == "shadow")
              return null;
            return (
              <>
                {
                  // <Button
                  //   bg="red.500"
                  //   color="yellow.200"
                  //   mb="1"
                  //   mx="1"
                  //   onClick={() => BuscaPoke(element.id)}
                  //   key={CreteId}
                  //   _hover={{ bg: "yellow.300", color: "red.500" }}
                  // >
                  //   {element.name}
                  // </Button>
                  <option
                    value={element.id}
                    key={CreteId}
                    style={{
                      color: "black",
                    }}
                  >
                    {element.name}
                  </option>
                }
              </>
            );
          })}
      </Select>

      {Poke && <MuestraPokemon Poke={Poke} />}
    </center>
  );
};

export default memo(AllButon);
