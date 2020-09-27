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

  input CharacterFiltersInput {
    name: String
    comics: [ID]
    stories: [ID]
  }

  type Query {
    characters(filter: CharacterFiltersInput, desc: Boolean): [Character]
    character(id: ID!): Character
  }
`;
