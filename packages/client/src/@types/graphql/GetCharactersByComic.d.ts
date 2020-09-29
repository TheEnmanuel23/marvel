/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCharactersByComic
// ====================================================

export interface GetCharactersByComic_comic_characters {
  __typename: "Character";
  id: string;
  name: string;
  thumbnail: string | null;
  description: string | null;
  resourceURI: string | null;
}

export interface GetCharactersByComic_comic {
  __typename: "Comic";
  id: string;
  characters: (GetCharactersByComic_comic_characters | null)[] | null;
}

export interface GetCharactersByComic {
  comic: GetCharactersByComic_comic | null;
}

export interface GetCharactersByComicVariables {
  id: string;
}
