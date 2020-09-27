import { gql } from "graphql-modules";

export default gql`
  type Comic {
    id: ID!
    title: String!
    description: String
    resourceURI: String
    thumbnail: String
  }
`;
