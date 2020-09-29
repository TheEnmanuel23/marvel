/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetComicsByStory
// ====================================================

export interface GetComicsByStory_story_comics {
  __typename: "Comic";
  id: string;
  title: string;
  thumbnail: string | null;
  issueNumber: number | null;
  format: string | null;
}

export interface GetComicsByStory_story {
  __typename: "Story";
  id: string;
  comics: (GetComicsByStory_story_comics | null)[] | null;
}

export interface GetComicsByStory {
  story: GetComicsByStory_story | null;
}

export interface GetComicsByStoryVariables {
  id: string;
}
