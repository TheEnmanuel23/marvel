import gql from "graphql-tag";
import {
  CHARACTER_FRAGMENT,
  STORY_FRAGMENT,
  COMIC_FRAGMENT,
} from "./fragments";
import { PAGINATION_FRAGMENT } from "./pagination";

export const GET_COMICS = gql`
  query GetComics(
    $filter: ComicFiltersInput
    $pagination: PaginationInput
    $orderBy: ComicSort
  ) {
    comics(filter: $filter, pagination: $pagination, orderBy: $orderBy) {
      ...PaginationFragment
      results {
        ...ComicFragment
      }
    }
  }
  ${PAGINATION_FRAGMENT}
  ${COMIC_FRAGMENT}
`;

export const GET_COMIC = gql`
  query GetComic($id: ID!) {
    comic(id: $id) {
      ...ComicFragment
    }
  }
  ${COMIC_FRAGMENT}
`;

export const GET_STORIES_BY_COMIC = gql`
  query GetStoriesByComic($id: ID!) {
    comic(id: $id) {
      id
      stories {
        ...StoryFragment
      }
    }
  }
  ${STORY_FRAGMENT}
`;

export const GET_CHARACTERS_BY_COMIC = gql`
  query GetCharactersByComic($id: ID!) {
    comic(id: $id) {
      id
      characters {
        ...CharacterFragment
      }
    }
  }
  ${CHARACTER_FRAGMENT}
`;
