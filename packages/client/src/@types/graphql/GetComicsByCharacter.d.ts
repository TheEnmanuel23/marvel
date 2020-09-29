/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetComicsByCharacter
// ====================================================

export interface GetComicsByCharacter_character_comics {
  __typename: "Comic";
  id: string;
  title: string;
  thumbnail: string | null;
  issueNumber: number | null;
  format: string | null;
}

export interface GetComicsByCharacter_character {
  __typename: "Character";
  id: string;
  comics: (GetComicsByCharacter_character_comics | null)[] | null;
}

export interface GetComicsByCharacter {
  character: GetComicsByCharacter_character | null;
}

export interface GetComicsByCharacterVariables {
  id: string;
}
