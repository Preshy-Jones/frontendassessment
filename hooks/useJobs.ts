import { useQuery, gql } from "@apollo/client";

const GET_JOBS = gql`
  query {
    jobs {
      id
    }
  }
`;

export const useJobs = () => {
  const { loading, error, data } = useQuery(GET_JOBS);

  return { loading, error, data };
};

