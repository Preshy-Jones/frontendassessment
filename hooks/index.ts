import { useQuery, gql } from "@apollo/client";

const GET_POSTS = gql`
  query MyQuery {
    postsConnection {
      edges {
        node {
          author {
            bio
            createdAt
            name
            id
            photo {
              url
            }
          }
          createdAt
          excerpt
          slug
          title
          featuredImage {
            url
          }
          categories {
            slug
            name
          }
        }
      }
    }
  }
`;

export const usePosts = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  return { loading, error, data };
};
