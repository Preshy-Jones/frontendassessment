import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { useCharacter } from "../hooks/useCharacter";

const Character = () => {
  const { data, loading, error } = useCharacter(3);
  console.log(data);

  return (
    <Box>
      {data && <Image src={data.character.image} />}
    </Box>
  );
};

export default Character;
