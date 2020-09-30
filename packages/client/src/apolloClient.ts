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
import {
  GET_FAVORITE_COMICS,
  GET_FAVORITE_HEROES,
  GET_FAVORITE_STORIES,
  typeDefs,
} from "./graphql/favorite";
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
      favoriteHeroes:
        JSON.parse(localStorage.getItem("favoriteHeroes") || "[]") || [],
      favoriteStories:
        JSON.parse(localStorage.getItem("favoriteStories") || "[]") || [],
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
      Character: {
        isFavorite: (hero, args, { cache }) => {
          const list = cache.readQuery({ query: GET_FAVORITE_HEROES });
          return !!list.favoriteHeroes.find((fav: any) => fav.id === hero.id);
        },
      },
      Story: {
        isFavorite: (story, args, { cache }) => {
          const list = cache.readQuery({ query: GET_FAVORITE_STORIES });
          return !!list.favoriteStories.find((fav: any) => fav.id === story.id);
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
        toggleFavoriteHeroes: (_root, { hero }, { cache }) => {
          const newHero = toggleFavorite({
            query: GET_FAVORITE_HEROES,
            entity: hero,
            cache,
            entityName: "favoriteHeroes",
          });

          return newHero;
        },
        toggleFavoriteStories: (_root, { story }, { cache }) => {
          const newHero = toggleFavorite({
            query: GET_FAVORITE_STORIES,
            entity: story,
            cache,
            entityName: "favoriteStories",
          });

          return newHero;
        },
      },
    },
  });
}

export default createApolloClient();
