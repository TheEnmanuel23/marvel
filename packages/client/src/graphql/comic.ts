import gql from "graphql-tag";
import { PAGINATION_FRAGMENT } from "./pagination";

export const COMIC_FRAGMENT = gql`
  fragment ComicFragment on Comic {
    id
    title
    thumbnail
    issueNumber
    format
  }
`;

export const GET_COMICS = gql`
  query GetComics($filter: ComicFiltersInput, $pagination: PaginationInput) {
    comics(filter: $filter, pagination: $pagination) {
      ...PaginationFragment
      results {
        ...ComicFragment
      }
    }
  }
  ${PAGINATION_FRAGMENT}
  ${COMIC_FRAGMENT}
`;
