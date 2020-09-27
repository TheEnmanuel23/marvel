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

  extend type Query {
    stories: [Story]
    story(id: ID!): Story
  }
`;
