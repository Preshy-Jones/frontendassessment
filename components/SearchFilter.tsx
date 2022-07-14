import { Box, Center, Flex, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const SearchFilter: React.FC = ({ refetch }: any) => {
  const filterData = {
    categories: [
      {
        name: "Fantasy",
        slug: "fantasy",
      },
      {
        name: "Sport",
        slug: "sport",
      },
      {
        name: "Artificial Intelligence",
        slug: "artificial-intelligence",
      },
    ],
    title: "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z",
    minute_read: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  };

  interface filterValuesInterface {
    category: string;
    title: string;
    min_minute_read: string;
    max_minute_read: string;
  }
  const filterValues: filterValuesInterface = {
    category: "",
    title: "",
    min_minute_read: "",
    max_minute_read: "",
  };

  const [filterState, setFilterState] =
    useState<filterValuesInterface>(filterValues);

  const handleRefetch = (e, filter: string) => {
    setFilterState((prevState) => {
      return { ...prevState, [filter]: e.target.value };
    });

    console.log(filterState);

    refetch({
      ...filterState,
      [filter]: e.target.value,
    });
  };
  return (
    <Flex justify="center">
      <Box width="75%">
        <Center>
          <Text fontSize="3xl">Filter</Text>
        </Center>
        <Flex>
          <Select
            onChange={(e) => handleRefetch(e, "category")}
            placeholder="By Category"
            w="fit-content"
            p="2"
          >
            {filterData.categories.map((category, index) => (
              <option key={index} value={category.slug}>
                {category.name}
              </option>
            ))}
          </Select>
          <Select
            onChange={(e) => handleRefetch(e, "title")}
            placeholder="By first letter of title"
            w="fit-content"
            p="2"
          >
            {filterData.title.split(",").map((alphabet, index) => (
              <option key={index} value={alphabet}>
                {alphabet}
              </option>
            ))}
          </Select>
          <Select
            onChange={(e) => handleRefetch(e, "title")}
            placeholder="By first letter of title"
            w="fit-content"
            p="2"
          >
            {filterData.title.split(",").map((alphabet, index) => (
              <option key={index} value={alphabet}>
                {alphabet}
              </option>
            ))}
          </Select>
        </Flex>
      </Box>
    </Flex>
  );
};

export default SearchFilter;
