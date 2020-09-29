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
import { Card } from "../../components/Card";
// @types
import {
  GetCharactersByComic,
  GetCharactersByComicVariables,
} from "../../@types/graphql/GetCharactersByComic";
import { GetCharacters_characters_results } from "../../@types/graphql/GetCharacters";

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
      {characters.map((hero: GetCharacters_characters_results) => (
        <Card
          key={hero.id}
          thumbnail={hero.thumbnail || ""}
          name={hero.name}
          id={hero.id}
          to={`/characters/${hero.id}`}
          body={<p>{hero.description}</p>}
        />
      ))}
    </Grid>
  );
};

export default Characters;
