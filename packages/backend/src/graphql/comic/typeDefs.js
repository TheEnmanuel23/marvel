import { gql } from "graphql-modules";

export default gql`
  type Comic {
    id: ID!
    title: String!
    description: String
    resourceURI: String
    thumbnail: String
    characters: [Character]
    stories: [Story]
  }

  extend type Query {
    comics: [Comic]
    comic(id: ID!): Comic
  }
`;
