import gql from "graphql-tag";

export const COMIC_FRAGMENT = gql`
  fragment ComicFragment on Comic {
    id
    title
    thumbnail
    issueNumber
    format
    isFavorite @client
  }
`;

export const CHARACTER_FRAGMENT = gql`
  fragment CharacterFragment on Character {
    id
    name
    thumbnail
    description
    resourceURI
  }
`;

export const STORY_FRAGMENT = gql`
  fragment StoryFragment on Story {
    id
    title
    thumbnail
    description
  }
`;
