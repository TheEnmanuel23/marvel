import { gql } from "graphql-modules";

export default gql`
  type Story {
    id: ID!
    title: String!
    description: String
    resourceURI: String
    thumbnail: String
  }
`;
