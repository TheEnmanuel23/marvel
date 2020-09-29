/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCharacter
// ====================================================

export interface GetCharacter_character {
  __typename: "Character";
  id: string;
  name: string;
  thumbnail: string | null;
  description: string | null;
  resourceURI: string | null;
}

export interface GetCharacter {
  character: GetCharacter_character | null;
}

export interface GetCharacterVariables {
  id: string;
}
