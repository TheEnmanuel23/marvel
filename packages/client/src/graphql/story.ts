import gql from "graphql-tag";
import { PAGINATION_FRAGMENT } from "./pagination";
import { STORY_FRAGMENT } from "./fragments";

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
