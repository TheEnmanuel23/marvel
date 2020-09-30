// @vendors
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import get from "lodash/fp/get";
import { useParams } from "react-router-dom";
// @graphql
import { GET_COMICS_BY_STORY } from "../../graphql/story";
// @components
import { Loader } from "../../components/Loader";
import { Grid } from "../../components/Grid";
// @types
import {
  GetComicsByStory,
  GetComicsByStoryVariables,
} from "../../@types/graphql/GetComicsByStory";
import { ComicCard } from "../../components/ComicCard";
import { Comic } from "../../@types/customTypes";

const Comics = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery<
    GetComicsByStory,
    GetComicsByStoryVariables
  >(GET_COMICS_BY_STORY, {
    variables: { id },
  });

  if (loading) {
    return <Loader loading />;
  }

  if (error) {
    return <p>Error</p>;
  }

  const comics = get("story.comics", data);

  return (
    <Grid>
      {comics.map((comic: Comic) => (
        <ComicCard comic={comic} />
      ))}
    </Grid>
  );
};

export default Comics;
