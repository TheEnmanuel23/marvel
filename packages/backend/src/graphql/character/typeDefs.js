import { gql } from "graphql-modules";

export default gql`
  type Character {
    id: ID!
    name: String!
    description: String
    thumbnail: String
    resourceURI: String
    comics: [Comic]
    stories: [Story]
  }

  type Query {
    characters: [Character]
    character(id: ID!): Character
  }
`;
