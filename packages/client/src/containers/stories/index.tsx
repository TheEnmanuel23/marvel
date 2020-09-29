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
  GetStories_stories_results,
} from "../../@types/graphql/GetStories";
// @graphql
import { LIMIT } from "../../utilities/constants";
import { GET_STORIES } from "../../graphql/story";

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
        {stories.map((story: GetStories_stories_results) => (
          <Card
            key={story.id}
            thumbnail={story.thumbnail || ""}
            name={story.title}
            id={story.id}
            to={`/stories/${story.id}`}
          />
        ))}
      </InfiniteScroll>
    </Grid>
  );
}

export default Stories;
