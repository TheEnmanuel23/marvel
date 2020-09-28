import { gql } from "graphql-modules";

export default gql`
  type Comic {
    id: ID!
    title: String!
    description: String
    resourceURI: String
    thumbnail: String
    issueNumber: Float
    format: String
    characters: [Character]
    stories: [Story]
  }

  input ComicFiltersInput {
    titleStartsWith: String
    issueNumber: Float
    format: IssueFormat
  }

  enum IssueFormat {
    COMIC
    MAGAZINE
    TRADE_PAPERBACK
    HARDCOVER
    DIGEST
    GRAPHIC_NOVEL
    DIGITAL_COMIC
    INFINITE_COMIC
  }

  enum ComicSort {
    TITLE
    ISSUE_NUMBER
  }

  type ComicConnection implements PaginationResponse {
    offset: Int
    total: Int
    limit: Int
    count: Int
    results: [Comic]
  }

  extend type Query {
    comics(
      filter: ComicFiltersInput
      orderBy: ComicSort
      pagination: PaginationInput
    ): ComicConnection
    comic(id: ID!): Comic
  }
`;
