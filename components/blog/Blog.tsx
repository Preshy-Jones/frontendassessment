import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import moment from "moment";
import { Post } from "../../types";

interface Props {
  post: Post;
}
const Blog: React.FC<Props> = ({ post }) => {
  return (
    <Box>
      <Grid>
        <Image src={post.featuredImage.url} width="100%" height="300px" />
        <Flex alignItems="center">
          <Text letterSpacing={2} py={2}>
            {moment(post.createdAt).format("MMMM DD, YYYY")}
          </Text>
          <Flex>
            <Image width="30px" height="30px" src={post.author.photo.url} />
            <Text letterSpacing={2} py={2}>
              {post.author.name}
            </Text>
          </Flex>
        </Flex>
        <Flex justify="space-between" px={3} bg="#F2FEFF" py={2} my={3}>
          <Text fontWeight="bold">Tech</Text>
          <Text>5min read</Text>
        </Flex>
        <Text fontWeight="extrabold" fontSize="xl">
          {" "}
          {post.title}
        </Text>
        <Text fontSize="sm" color="#B9B9B9" fontWeight="bold" py={2}>
          {post.excerpt}
        </Text>
      </Grid>
    </Box>
  );
};

export default Blog;
