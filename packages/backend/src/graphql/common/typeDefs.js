import { gql } from "graphql-modules";

export default gql`
  input PaginationInput {
    offset: Int
    limit: Int
  }

  interface PaginationResponse {
    offset: Int
    total: Int
    limit: Int
    count: Int
  }
`;
