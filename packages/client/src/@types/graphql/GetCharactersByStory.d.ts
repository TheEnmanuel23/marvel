/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCharactersByStory
// ====================================================

export interface GetCharactersByStory_story_characters {
  __typename: "Character";
  id: string;
  name: string;
  thumbnail: string | null;
  description: string | null;
  resourceURI: string | null;
}

export interface GetCharactersByStory_story {
  __typename: "Story";
  id: string;
  characters: (GetCharactersByStory_story_characters | null)[] | null;
}

export interface GetCharactersByStory {
  story: GetCharactersByStory_story | null;
}

export interface GetCharactersByStoryVariables {
  id: string;
}
