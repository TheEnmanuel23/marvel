// @vendors
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import get from "lodash/fp/get";
import { useParams } from "react-router-dom";
// @graphql
import { GET_CHARACTERS_BY_COMIC } from "../../graphql/comic";
// @components
import { Loader } from "../../components/Loader";
import { Grid } from "../../components/Grid";
import { HeroCard } from "../../components/HeroCard";
// @types
import {
  GetCharactersByComic,
  GetCharactersByComicVariables,
} from "../../@types/graphql/GetCharactersByComic";
import { Hero } from "../../@types/customTypes";

const Characters = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery<
    GetCharactersByComic,
    GetCharactersByComicVariables
  >(GET_CHARACTERS_BY_COMIC, {
    variables: { id },
  });

  if (loading) {
    return <Loader loading />;
  }

  if (error) {
    return <p>Error</p>;
  }

  const characters = get("comic.characters", data);

  return (
    <Grid>
      {characters.map((hero: Hero) => (
        <HeroCard hero={hero} />
      ))}
    </Grid>
  );
};

export default Characters;
