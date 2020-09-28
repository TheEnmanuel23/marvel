import { gql } from "graphql-modules";

export default gql`
  type Story {
    id: ID!
    title: String!
    description: String
    resourceURI: String
    thumbnail: String
    characters: [Character]
    comics: [Comic]
  }

  type StoryConnection implements PaginationResponse {
    offset: Int
    total: Int
    limit: Int
    count: Int
    results: [Story]
  }

  extend type Query {
    stories(pagination: PaginationInput): StoryConnection
    story(id: ID!): Story
  }
`;
