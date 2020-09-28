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
  query GetCharacters {
    characters(pagination: { offset: 20 }) {
      ...PaginationFragment
      results {
        ...CharacterFragment
      }
    }
  }
  ${PAGINATION_FRAGMENT}
  ${CHARACTER_FRAGMENT}
`;
