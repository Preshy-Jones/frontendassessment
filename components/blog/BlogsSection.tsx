import { Box, Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { usePosts } from "../../hooks";
import SearchFilter from "../SearchFilter";
import Blog from "./Blog";

const BlogsSection: React.FC = () => {
  const { loading, data, error, refetch } = usePosts("", "", true);
  // const [isFiltered, setIsFiltered] = useState(false);

  // if (loading) return "Loading...";
  // if (error) return `Error! ${error.message}`;

  const [dataFetched, setDataFetched] = useState();

  // const fetchPosts = () => {
  //   const { loading, data, error } = usePosts();
  console.log(data);

  // };
  // useEffect(() => {
  //   setDataFetched(data);
  //   console.log(dataFetched);
  // }, [data]);

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
      <SearchFilter refetch={refetch} />
      <Flex justify="center">
        <Grid
          pt={12}
          templateColumns="repeat(3, 1fr)"
          columnGap={9}
          rowGap={5}
          width="75%"
        >
          {data &&
            data.posts.map((post: any, index: any) => (
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
