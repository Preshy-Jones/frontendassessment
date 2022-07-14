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

const GET_FILTERED_POSTS = gql`
  query MyQuery(
    $category: String
    $title: String
    $isFiltered: Boolean = true
  ) {
    posts: posts(
      where: {
        AND: [
          { categories_some: { slug_contains: $category } }
          { title_starts_with: $title }
        ]
      }
    ) @include(if: $isFiltered) {
      ...postFields
    }
  }

  fragment postFields on Post {
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
`;
// interface PostPayload {
//   categories: string;
//   isFiltered: string;
// }

export const usePosts = (
  category: string,
  title: string,
  isFiltered: boolean = false
) => {
  const { loading, error, data, refetch } = useQuery(GET_FILTERED_POSTS, {
    variables: {
      category,
      title,
      isFiltered,
    },
  });

  return { loading, error, data, refetch };
};
