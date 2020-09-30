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
import { GET_FAVORITE_COMICS, typeDefs } from "./graphql/favorite";
import { toggleFavorite } from "./utilities/toggleFavorite";

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

  const cache = new InMemoryCache({ fragmentMatcher });
  cache.writeData({
    data: {
      favoriteComics:
        JSON.parse(localStorage.getItem("favoriteComics") || "[]") || [],
    },
  });

  return new ApolloClient({
    link: ApolloLink.from(isDev ? [apolloLogger, ...links] : links),
    cache,
    typeDefs,
    resolvers: {
      Comic: {
        isFavorite: (comic, args, { cache }) => {
          const list = cache.readQuery({ query: GET_FAVORITE_COMICS });
          return !!list.favoriteComics.find((fav: any) => fav.id === comic.id);
        },
      },
      Mutation: {
        toggleFavoriteComics: (_root, { comic }, { cache }) => {
          const newComic = toggleFavorite({
            query: GET_FAVORITE_COMICS,
            entity: comic,
            cache,
            entityName: "favoriteComics",
          });

          return newComic;
        },
      },
    },
  });
}

export default createApolloClient();
