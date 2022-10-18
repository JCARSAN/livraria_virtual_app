import { theme } from '../styles/themes';
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://livrariavirtual.saleor.cloud/graphql/",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ApolloProvider client={client}>
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    </ApolloProvider>
  ) 
}

export default MyApp
