// @vendors
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import get from "lodash/fp/get";
import { useParams } from "react-router-dom";
// @graphql
import { GET_COMICS_BY_CHARACTER } from "../../graphql/character";
// @components
import { Loader } from "../../components/Loader";
import { Grid } from "../../components/Grid";
import { Card } from "../../components/Card";
// @types
import {
  GetComicsByCharacter,
  GetComicsByCharacterVariables,
} from "../../@types/graphql/GetComicsByCharacter";
import { ComicCard } from "../../components/ComicCard";
import { Comic } from "../../@types/customTypes";

const Comics = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery<
    GetComicsByCharacter,
    GetComicsByCharacterVariables
  >(GET_COMICS_BY_CHARACTER, {
    variables: { id },
  });

  if (loading) {
    return <Loader loading />;
  }

  if (error) {
    return <p>Error</p>;
  }

  const comics = get("character.comics", data);

  return (
    <Grid>
      {comics.map((comic: Comic) => (
        <ComicCard comic={comic} />
      ))}
    </Grid>
  );
};

export default Comics;
