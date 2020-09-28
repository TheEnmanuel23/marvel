import gql from "graphql-tag";

export const PAGINATION_FRAGMENT = gql`
  fragment PaginationFragment on PaginationResponse {
    offset
    limit
    count
    total
  }
`;
