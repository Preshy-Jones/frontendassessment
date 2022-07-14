import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { changeSearchStatus } from "../features/blog/blogSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { filterData } from "../utils/filterData";

const SearchFilter: React.FC = ({ refetch, searchRefetch, getPosts }: any) => {
  interface filterValuesInterface {
    category: string;
    title: string;
    min_minute_read: number;
    max_minute_read: number;
  }
  const filterValues: filterValuesInterface = {
    category: "",
    title: "",
    min_minute_read: 0,
    max_minute_read: 15,
  };
  const { isSearch } = useAppSelector((store) => store.blog);

  const [filterState, setFilterState] =
    useState<filterValuesInterface>(filterValues);

  const handleRefetch = (e, filter: string) => {
    setFilterState((prevState) => {
      return { ...prevState, [filter]: Number(e.target.value) };
    });

    console.log(filterState);
    if (isSearch) {
      searchRefetch({
        ...filterState,
        [filter]: Number(e.target.value),
      });
    } else {
      refetch({
        ...filterState,
        [filter]: Number(e.target.value),
      });
    }
  };
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useAppDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchValue);
    dispatch(changeSearchStatus(true));
    getPosts({ variables: { searchValue: searchValue } });
  };

  return (
    <Flex justify="center">
      <Box width="75%">
        <form onSubmit={handleSearch}>
          <Flex>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                type="text"
                placeholder="Search by title, author or category"
              />
            </InputGroup>
            <Button
              type="submit"
              backgroundColor="pink.600"
              borderRightRadius="10"
            >
              <SearchIcon cursor="pointer" color="white" fontSize="xl" />
            </Button>
          </Flex>
        </form>

        <Text mt={10} fontSize="3xl">
          Filters
        </Text>
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
            onChange={(e) => handleRefetch(e, "min_minute_read")}
            placeholder="Lowest minute read"
            w="fit-content"
            p="2"
          >
            {filterData.minute_read.map((minute, index) => (
              <option key={index} value={minute}>
                {`${minute}  min`}
              </option>
            ))}
          </Select>
          <Select
            onChange={(e) => handleRefetch(e, "max_minute_read")}
            placeholder="Maximum minute read"
            w="fit-content"
            p="2"
          >
            {filterData.minute_read.map((minute, index) => (
              <option key={index} value={minute}>
                {`${minute}  min`}
              </option>
            ))}
          </Select>
        </Flex>
      </Box>
    </Flex>
  );
};

export default SearchFilter;
