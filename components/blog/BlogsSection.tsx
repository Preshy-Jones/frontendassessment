import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { usePosts } from "../../hooks";
import Blog from "./Blog";

const BlogsSection: React.FC = () => {
  const { loading, data, error } = usePosts();

  // if (loading) return "Loading...";
  // if (error) return `Error! ${error.message}`;

  return (
    <Box>
      {/* {data && <pre>{JSON.stringify(data.postsConnection.edges, null, 2)}</pre>} */}
      <Flex justify="center">
        <Grid
          pt={12}
          templateColumns="repeat(3, 1fr)"
          columnGap={9}
          rowGap={5}
          width="75%"
        >
          {data &&
            data.postsConnection.edges.map((post: any, index: any) => (
              <GridItem key={index}>
                <Blog post={post.node} />
              </GridItem>
            ))}
        </Grid>
      </Flex>
    </Box>
  );
};

export default BlogsSection;
