/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetStory
// ====================================================

export interface GetStory_story {
  __typename: "Story";
  id: string;
  title: string;
  thumbnail: string | null;
  description: string | null;
}

export interface GetStory {
  story: GetStory_story | null;
}

export interface GetStoryVariables {
  id: string;
}
