import { useQuery, gql, useLazyQuery } from "@apollo/client";

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
    $min_minute_read: Int
    $max_minute_read: Int
    $isFiltered: Boolean = false
  ) {
    posts: posts(
      where: {
        AND: [
          { categories_some: { slug_contains: $category } }
          { title_starts_with: $title }
          { minuteRead_gte: $min_minute_read }
          { minuteRead_lte: $max_minute_read }
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
    minuteRead
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

const GET_SEARCHED_POSTS = gql`
  query MyQuery($searchValue: String = "jong") {
    posts: posts(
      where: {
        OR: [
          { categories_some: { slug_contains: $searchValue } }
          { title_contains: $searchValue }
          { author: { name_contains: $searchValue } }
        ]
      }
    ) {
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
    minuteRead
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
  min_minute_read: number,
  max_minute_read: number,
  isFiltered: boolean = false
) => {
  const { loading, error, data, refetch } = useQuery(GET_FILTERED_POSTS, {
    variables: {
      category,
      title,
      min_minute_read,
      max_minute_read,
      isFiltered,
    },
  });

  return { loading, error, data, refetch };
};

export const useSearch = (searchValue: string) => {
  const [getPosts, { loading, error, data, refetch }] = useLazyQuery(
    GET_SEARCHED_POSTS,
    {
      variables: {
        searchValue,
      },
    }
  );

  const searchLoading = loading;
  const searchError = error;
  const searchData = data;
  const searchRefetch = fetch;
  return { getPosts, searchLoading, searchError, searchData, searchRefetch };
};
