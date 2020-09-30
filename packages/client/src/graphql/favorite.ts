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

export const ADD_FAVORITE_COMIC = gql`
  mutation AddFavoriteComic($comic: ComicInput) {
    addFavoriteComics(comic: $comic) @client {
      id
      isFavorite
    }
  }
`;

export const REMOVE_FAVORITE_COMIC = gql`
  mutation RemoveFavoriteComic($comic: ComicInput) {
    removeFavoriteComics(comic: $comic) @client {
      id
      isFavorite
    }
  }
`;
