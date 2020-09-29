/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetStoriesByComic
// ====================================================

export interface GetStoriesByComic_comic_stories {
  __typename: "Story";
  id: string;
  title: string;
  thumbnail: string | null;
  description: string | null;
}

export interface GetStoriesByComic_comic {
  __typename: "Comic";
  id: string;
  stories: (GetStoriesByComic_comic_stories | null)[] | null;
}

export interface GetStoriesByComic {
  comic: GetStoriesByComic_comic | null;
}

export interface GetStoriesByComicVariables {
  id: string;
}
