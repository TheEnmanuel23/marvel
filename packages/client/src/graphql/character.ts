import gql from "graphql-tag";
import { PAGINATION_FRAGMENT } from "./pagination";

export const CHARACTER_FRAGMENT = gql`
  fragment CharacterFragment on Character {
    id
    name
    thumbnail
    description
    resourceURI
  }
`;

export const GET_CHARACTERS = gql`
  query GetCharacters($pagination: PaginationInput) {
    characters(pagination: $pagination) {
      ...PaginationFragment
      results {
        ...CharacterFragment
      }
    }
  }
  ${PAGINATION_FRAGMENT}
  ${CHARACTER_FRAGMENT}
`;
