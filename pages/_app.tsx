import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { RetryLink } from "@apollo/client/link/retry";
import { onError } from "@apollo/client/link/error";
import { ChakraProvider } from "@chakra-ui/react";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import theme from "../styles/theme";
import { Provider } from "react-redux";
import { store } from "../store/store";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// const errorLink = onError(({ graphqlErrors, networkError }) => {
//   if (graphqlErrors) {
//     graphqlErrors.map(({ message, location, path }) => {
//       alert(`Graphql error ${message}`);
//     });
//   }
// });

// const link = from([
//   errorLink,
//   new HttpLink({ uri: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT }),
// ]);

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT,
  cache: new InMemoryCache(),
});

// const client = new ApolloClient({
//   // uri: "https://rickandmortyapi.com/graphql",
//   cache: new InMemoryCache(),
//   link: link,
// });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
