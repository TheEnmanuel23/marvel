/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaginationInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetComics
// ====================================================

export interface GetComics_comics_results {
  __typename: "Comic";
  id: string;
  title: string;
  thumbnail: string | null;
  issueNumber: number | null;
  format: string | null;
}

export interface GetComics_comics {
  __typename: "ComicConnection";
  offset: number | null;
  limit: number | null;
  count: number | null;
  total: number | null;
  results: (GetComics_comics_results | null)[] | null;
}

export interface GetComics {
  comics: GetComics_comics | null;
}

export interface GetComicsVariables {
  pagination?: PaginationInput | null;
}
