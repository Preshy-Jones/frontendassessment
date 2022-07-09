import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Character from "./Character";
import { useCharacter } from "../hooks/useCharacter";
import { useCharacters } from "../hooks/useCharacters";

const CharacterList: React.FC = () => {
  interface Character {
    name: string;
    id: string;
    image: string;
  }
  const { loading, error, data } = useCharacters();

  console.log({ loading, error, data });

  return (
    <Box>
      <Text>Character list</Text>
      <Box>
        {loading && <Spinner size="xl" color="red.500" />}
        {error && <Text>Something went wrong</Text>}
      </Box>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      <Flex>
        <Grid
          pt={12}
          templateColumns="repeat(3, 1fr)"
          columnGap={9}
          rowGap={5}
          width="75%"
        >
          {}

          {data &&
            data.characters.results.map((character: Character) => (
              <GridItem key={character.id}>
                <Image src={character.image} />
              </GridItem>
            ))}
        </Grid>
      </Flex>
    </Box>
  );
};

export default CharacterList;
