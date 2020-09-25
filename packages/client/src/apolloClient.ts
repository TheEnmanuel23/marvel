import { ApolloClient } from "apollo-client";
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import apolloLogger from "apollo-link-logger";
import introspectionQueryResultData from "./utilities/graphqlSchema.json";

const fragmentMatcher = new IntrospectionFragmentMatcher({
  // @ts-ignore
  introspectionQueryResultData,
});

function createApolloClient() {
  const isDev = process.env.NODE_ENV === "development";

  const links = [
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: process.env.REACT_APP_API,
      credentials: "same-origin",
    }),
  ];

  return new ApolloClient({
    link: ApolloLink.from(isDev ? [apolloLogger, ...links] : links),
    cache: new InMemoryCache({ fragmentMatcher }),
  });
}

export default createApolloClient();
