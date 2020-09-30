// @vendors
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import get from "lodash/fp/get";
// @graphql
import { GET_FAVORITE_STORIES } from "../../graphql/favorite";
// @components
import { Loader } from "../../components/Loader";
import { Grid } from "../../components/Grid";
import { StoryCard } from "../../components/StoryCard";
// @types
import { Story } from "../../@types/customTypes";

const Stories = () => {
  const { loading, error, data } = useQuery(GET_FAVORITE_STORIES);

  if (loading) {
    return <Loader loading />;
  }

  if (error) {
    return <p>Error</p>;
  }

  const stories = get("favoriteStories", data);

  return (
    <Grid>
      {stories.map((story: Story) => (
        <StoryCard story={story} />
      ))}
    </Grid>
  );
};

export default Stories;
