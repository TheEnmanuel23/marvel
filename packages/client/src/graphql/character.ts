import gql from "graphql-tag";
import {
  COMIC_FRAGMENT,
  STORY_FRAGMENT,
  CHARACTER_FRAGMENT,
} from "./fragments";
import { PAGINATION_FRAGMENT } from "./pagination";

export const GET_CHARACTERS = gql`
  query GetCharacters(
    $filter: CharacterFiltersInput
    $pagination: PaginationInput
  ) {
    characters(filter: $filter, pagination: $pagination) {
      ...PaginationFragment
      results {
        ...CharacterFragment
      }
    }
  }
  ${PAGINATION_FRAGMENT}
  ${CHARACTER_FRAGMENT}
`;

export const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      ...CharacterFragment
    }
  }
  ${CHARACTER_FRAGMENT}
`;

export const GET_STORIES_BY_CHARACTER = gql`
  query GetStoriesByCharacter($id: ID!) {
    character(id: $id) {
      id
      stories {
        ...StoryFragment
      }
    }
  }
  ${STORY_FRAGMENT}
`;

export const GET_COMICS_BY_CHARACTER = gql`
  query GetComicsByCharacter($id: ID!) {
    character(id: $id) {
      id
      comics {
        ...ComicFragment
      }
    }
  }
  ${COMIC_FRAGMENT}
`;
