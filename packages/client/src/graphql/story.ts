import gql from "graphql-tag";
import { PAGINATION_FRAGMENT } from "./pagination";

export const STORY_FRAGMENT = gql`
  fragment StoryFragment on Story {
    id
    title
    thumbnail
    description
  }
`;

export const GET_STORY = gql`
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
