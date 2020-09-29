/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetStoriesByCharacter
// ====================================================

export interface GetStoriesByCharacter_character_stories {
  __typename: "Story";
  id: string;
  title: string;
  thumbnail: string | null;
  description: string | null;
}

export interface GetStoriesByCharacter_character {
  __typename: "Character";
  id: string;
  stories: (GetStoriesByCharacter_character_stories | null)[] | null;
}

export interface GetStoriesByCharacter {
  character: GetStoriesByCharacter_character | null;
}

export interface GetStoriesByCharacterVariables {
  id: string;
}
