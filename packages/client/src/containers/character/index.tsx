// @vendors
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Loader } from "../../components/Loader";
import { HeroCard } from "../../components/HeroCard";
import { Grid } from "../../components/Grid";
import get from "lodash/fp/get";
// @types
import {
  GetCharacters,
  GetCharactersVariables,
  GetCharacters_characters_results,
} from "../../@types/graphql/GetCharacters";
// @graphql
import { GET_CHARACTERS } from "../../graphql/character";

function Character() {
  const { loading, error, data } = useQuery<
    GetCharacters,
    GetCharactersVariables
  >(GET_CHARACTERS, {
    variables: {
      pagination: {
        offset: 20,
      },
    },
  });

  if (loading) {
    return <Loader loading />;
  }

  if (error) {
    return <p>Error</p>;
  }

  const characters = get("characters.results", data);

  return (
    <Grid>
      {characters.map((hero: GetCharacters_characters_results) => (
        <HeroCard
          key={hero.id}
          thumbnail={hero.thumbnail || ""}
          name={hero.name}
          id={hero.id}
        />
      ))}
    </Grid>
  );
}

export default Character;
