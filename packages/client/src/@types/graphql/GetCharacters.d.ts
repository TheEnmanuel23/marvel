/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaginationInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetCharacters
// ====================================================

export interface GetCharacters_characters_results {
  __typename: "Character";
  id: string;
  name: string;
  thumbnail: string | null;
  description: string | null;
  resourceURI: string | null;
}

export interface GetCharacters_characters {
  __typename: "CharacterConnection";
  offset: number | null;
  limit: number | null;
  count: number | null;
  total: number | null;
  results: (GetCharacters_characters_results | null)[] | null;
}

export interface GetCharacters {
  characters: GetCharacters_characters | null;
}

export interface GetCharactersVariables {
  pagination?: PaginationInput | null;
}
