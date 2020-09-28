// @vendors
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_CHARACTERS } from "../../graphql/character";
import { Loader } from "../../components/Loader";
import { HeroCard } from "../../components/HeroCard";
import { Grid } from "../../components/Grid";

function Character() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) {
    return <Loader loading />;
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <Grid>
      {data.characters.results.map((hero: any) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </Grid>
  );
}

export default Character;
