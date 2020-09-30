// @vendors
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import get from "lodash/fp/get";
import InfiniteScroll from "react-infinite-scroll-component";
// @components
import { Card } from "../../components/Card";
import { Grid } from "../../components/Grid";
import { Loader } from "../../components/Loader";
// @types
import {
  GetStories,
  GetStoriesVariables,
} from "../../@types/graphql/GetStories";
import { Story } from "../../@types/customTypes";
// @graphql
import { LIMIT } from "../../utilities/constants";
import { GET_STORIES } from "../../graphql/story";
import { StoryCard } from "../../components/StoryCard";

function Stories() {
  const { loading, error, data, fetchMore } = useQuery<
    GetStories,
    GetStoriesVariables
  >(GET_STORIES, {
    variables: {
      pagination: {
        limit: LIMIT,
      },
    },
  });

  if (loading) {
    return <Loader loading />;
  }

  if (error) {
    return <p>Error</p>;
  }

  const stories = get("stories.results", data);

  const loadMore = () => {
    fetchMore({
      variables: {
        pagination: {
          offset: stories.length,
          limit: LIMIT,
        },
      },
      updateQuery: (prev: GetStories, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;

        const prevComics = get("stories.results", prev) || [];
        const newComics = get("stories.results", fetchMoreResult) || [];

        const data = {
          stories: {
            ...fetchMoreResult.stories,
            results: [...prevComics, ...newComics],
          },
        } as any;

        return data;
      },
    });
  };

  return (
    <Grid>
      <InfiniteScroll
        dataLength={stories.length}
        next={loadMore}
        hasMore={true}
        loader={<p>Loading more...</p>}
      >
        {stories.map((story: Story) => (
          <StoryCard story={story} />
        ))}
      </InfiniteScroll>
    </Grid>
  );
}

export default Stories;
