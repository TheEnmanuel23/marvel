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
    nameStartsWith: String
    comics: String # 1,2,3,4,5
    stories: String # 1,2,3,4,5
  }

  type CharacterConnection implements PaginationResponse {
    offset: Int
    total: Int
    limit: Int
    count: Int
    results: [Character]
  }

  type Query {
    characters(
      filter: CharacterFiltersInput
      desc: Boolean
      pagination: PaginationInput
    ): CharacterConnection
    character(id: ID!): Character
  }
`;
