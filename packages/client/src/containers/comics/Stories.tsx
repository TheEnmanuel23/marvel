// @vendors
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import get from "lodash/fp/get";
import { useParams } from "react-router-dom";
// @graphql
import { GET_STORIES_BY_COMIC } from "../../graphql/comic";
// @components
import { Loader } from "../../components/Loader";
import { Grid } from "../../components/Grid";
import { StoryCard } from "../../components/StoryCard";
// @types
import {
  GetStoriesByComic,
  GetStoriesByComicVariables,
} from "../../@types/graphql/GetStoriesByComic";
import { Story } from "../../@types/customTypes";

const Stories = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery<
    GetStoriesByComic,
    GetStoriesByComicVariables
  >(GET_STORIES_BY_COMIC, {
    variables: { id },
  });

  if (loading) {
    return <Loader loading />;
  }

  if (error) {
    return <p>Error</p>;
  }

  const stories = get("comic.stories", data);

  return (
    <Grid>
      {stories.map((story: Story) => (
        <StoryCard story={story} />
      ))}
    </Grid>
  );
};

export default Stories;
