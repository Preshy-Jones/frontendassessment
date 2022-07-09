import { useQuery, gql } from "@apollo/client";

const GET_LOCATIONS = gql`
  query {
    characters {
      results {
        name
        id
        image
      }
    }
  }
`;

export const useCharacters = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  return { loading, error, data };
};
