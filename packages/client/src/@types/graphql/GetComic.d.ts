/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetComic
// ====================================================

export interface GetComic_comic {
  __typename: "Comic";
  id: string;
  title: string;
  thumbnail: string | null;
  issueNumber: number | null;
  format: string | null;
}

export interface GetComic {
  comic: GetComic_comic | null;
}

export interface GetComicVariables {
  id: string;
}
