/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ComicSort {
  ISSUE_NUMBER = "ISSUE_NUMBER",
  TITLE = "TITLE",
}

export enum IssueFormat {
  COMIC = "COMIC",
  DIGEST = "DIGEST",
  DIGITAL_COMIC = "DIGITAL_COMIC",
  GRAPHIC_NOVEL = "GRAPHIC_NOVEL",
  HARDCOVER = "HARDCOVER",
  INFINITE_COMIC = "INFINITE_COMIC",
  MAGAZINE = "MAGAZINE",
  TRADE_PAPERBACK = "TRADE_PAPERBACK",
}

export interface CharacterFiltersInput {
  nameStartsWith?: string | null;
  comics?: string | null;
  stories?: string | null;
}

export interface ComicFiltersInput {
  titleStartsWith?: string | null;
  issueNumber?: number | null;
  format?: IssueFormat | null;
}

export interface PaginationInput {
  offset?: number | null;
  limit?: number | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
