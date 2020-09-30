import gql from "graphql-tag";

export const typeDefs = gql`
  input ComicInput {
    id: ID
    title: String
    thumbnail: String
    issueNumber: Float
    format: String
    isFavorite: Boolean
  }

  input HeroInput {
    id: ID
    name: String
    thumbnail: String
    description: String
    resourceURI: String
    isFavorite: Boolean
  }
`;

export const GET_FAVORITE_COMICS = gql`
  query GetFavoriteComics {
    favoriteComics @client {
      id
      title
      thumbnail
      issueNumber
      format
      isFavorite
    }
  }
`;

export const GET_FAVORITE_HEROES = gql`
  query GetFavoriteHeroes {
    favoriteHeroes @client {
      id
      name
      thumbnail
      description
      resourceURI
      isFavorite
    }
  }
`;

export const TOGGLE_FAVORITE_COMIC = gql`
  mutation ToggleFavoriteComic($comic: ComicInput) {
    toggleFavoriteComics(comic: $comic) @client {
      id
      isFavorite
    }
  }
`;

export const TOGGLE_FAVORITE_HERO = gql`
  mutation ToggleFavoriteHero($hero: HeroInput) {
    toggleFavoriteHeroes(hero: $hero) @client {
      id
      isFavorite
    }
  }
`;
