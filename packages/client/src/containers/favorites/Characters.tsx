// @vendors
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import get from "lodash/fp/get";
// @graphql
import { GET_FAVORITE_HEROES } from "../../graphql/favorite";
// @components
import { Loader } from "../../components/Loader";
import { Grid } from "../../components/Grid";
import { HeroCard } from "../../components/HeroCard";
// @types
import { Hero } from "../../@types/customTypes";

const Characters = () => {
  const { loading, error, data } = useQuery(GET_FAVORITE_HEROES);

  if (loading) {
    return <Loader loading />;
  }

  if (error) {
    return <p>Error</p>;
  }

  const characters = get("favoriteHeroes", data);

  return (
    <Grid>
      {characters.map((hero: Hero) => (
        <HeroCard hero={hero} />
      ))}
    </Grid>
  );
};

export default Characters;
