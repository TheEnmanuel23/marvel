// @vendors
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import get from "lodash/fp/get";
import { useParams } from "react-router-dom";
// @graphql
import { GET_STORIES_BY_CHARACTER } from "../../graphql/character";
// @components
import { Loader } from "../../components/Loader";
import { Grid } from "../../components/Grid";
import { Card } from "../../components/Card";
// @types
import {
  GetStoriesVariables,
  GetStories_stories_results,
} from "../../@types/graphql/GetStories";
import { GetStoriesByCharacterVariables } from "../../@types/graphql/GetStoriesByCharacter";

const Stories = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery<
    GetStoriesVariables,
    GetStoriesByCharacterVariables
  >(GET_STORIES_BY_CHARACTER, {
    variables: { id },
  });

  if (loading) {
    return <Loader loading />;
  }

  if (error) {
    return <p>Error</p>;
  }

  const stories = get("character.stories", data);

  return (
    <Grid>
      {stories.map((story: GetStories_stories_results) => (
        <Card
          key={story.id}
          thumbnail={story.thumbnail || ""}
          name={story.title}
          id={story.id}
          to={`/stories/${story.id}`}
        />
      ))}
    </Grid>
  );
};

export default Stories;
