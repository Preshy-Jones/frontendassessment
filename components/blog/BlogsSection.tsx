import { Box, Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { usePosts, useSearch } from "../../hooks";
import { useAppSelector } from "../../store/hooks";
import SearchFilter from "../SearchFilter";
import Blog from "./Blog";

const BlogsSection: React.FC = () => {
  const { loading, data, error, refetch } = usePosts("", "", 0, 15, true);
  const { getPosts, searchLoading, searchError, searchData, searchRefetch } =
    useSearch("");
  // const [isFiltered, setIsFiltered] = useState(false);

  const { isSearch } = useAppSelector((store) => store.blog);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  if (searchLoading) return "Loading...";
  if (searchError) return `Error! ${searchError.message}`;

  const handleFilter = (
    e: React.MouseEvent<HTMLButtonElement>,
    filter: string
  ) => {
    e.preventDefault();
    refetch({
      category: filter,
      isFiltered: true,
    });
  };
  return (
    <Box>
      <SearchFilter
        refetch={refetch}
        searchRefetch={searchRefetch}
        getPosts={getPosts}
      />
      <Flex justify="center">
        <Grid
          pt={12}
          templateColumns="repeat(3, 1fr)"
          columnGap={9}
          rowGap={5}
          width="75%"
        >
          {data &&
            !isSearch &&
            data.posts.map((post: any, index: any) => (
              <GridItem key={index}>
                <Blog post={post} />
              </GridItem>
            ))}
          {isSearch &&
            searchData &&
            searchData.posts.map((post: any, index: any) => (
              <GridItem key={index}>
                <Blog post={post} />
              </GridItem>
            ))}
        </Grid>
      </Flex>
    </Box>
  );
};

export default BlogsSection;
