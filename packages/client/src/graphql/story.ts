import gql from "graphql-tag";
import { PAGINATION_FRAGMENT } from "./pagination";
import {
  CHARACTER_FRAGMENT,
  COMIC_FRAGMENT,
  STORY_FRAGMENT,
} from "./fragments";

export const GET_STORIES = gql`
  query GetStories($pagination: PaginationInput) {
    stories(pagination: $pagination) {
      ...PaginationFragment
      results {
        ...StoryFragment
      }
    }
  }
  ${PAGINATION_FRAGMENT}
  ${STORY_FRAGMENT}
`;

export const GET_STORY = gql`
  query GetStory($id: ID!) {
    story(id: $id) {
      ...StoryFragment
    }
  }
  ${STORY_FRAGMENT}
`;

export const GET_COMICS_BY_STORY = gql`
  query GetComicsByStory($id: ID!) {
    story(id: $id) {
      id
      comics {
        ...ComicFragment
      }
    }
  }
  ${COMIC_FRAGMENT}
`;

export const GET_CHARACTERS_BY_STORY = gql`
  query GetCharactersByStory($id: ID!) {
    story(id: $id) {
      id
      characters {
        ...CharacterFragment
      }
    }
  }
  ${CHARACTER_FRAGMENT}
`;
