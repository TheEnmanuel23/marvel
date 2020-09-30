import gql from "graphql-tag";

export const typeDefs = gql`
  input FavoriteInput {
    id: ID
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

export const GET_FAVORITE_STORIES = gql`
  query GetFavoriteStories {
    favoriteStories @client {
      id
      title
      thumbnail
      description
      isFavorite
    }
  }
`;

export const TOGGLE_FAVORITE_COMIC = gql`
  mutation ToggleFavoriteComic($comic: FavoriteInput) {
    toggleFavoriteComics(comic: $comic) @client {
      id
      isFavorite
    }
  }
`;

export const TOGGLE_FAVORITE_HERO = gql`
  mutation ToggleFavoriteHero($hero: FavoriteInput) {
    toggleFavoriteHeroes(hero: $hero) @client {
      id
      isFavorite
    }
  }
`;

export const TOGGLE_FAVORITE_STORY = gql`
  mutation ToggleFavoriteStory($story: FavoriteInput) {
    toggleFavoriteStories(story: $story) @client {
      id
      isFavorite
    }
  }
`;
