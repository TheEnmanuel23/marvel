/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaginationInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetStories
// ====================================================

export interface GetStories_stories_results {
  __typename: "Story";
  id: string;
  title: string;
  thumbnail: string | null;
  description: string | null;
}

export interface GetStories_stories {
  __typename: "StoryConnection";
  offset: number | null;
  limit: number | null;
  count: number | null;
  total: number | null;
  results: (GetStories_stories_results | null)[] | null;
}

export interface GetStories {
  stories: GetStories_stories | null;
}

export interface GetStoriesVariables {
  pagination?: PaginationInput | null;
}
