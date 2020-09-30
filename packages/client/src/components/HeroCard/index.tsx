import { useMutation } from "@apollo/react-hooks";
import React from "react";
import { Hero } from "../../@types/customTypes";
import { TOGGLE_FAVORITE_HERO } from "../../graphql/favorite";
import { Card } from "../Card";

export const HeroCard = ({ hero }: { hero: Hero }) => {
  const [toggleFavorite] = useMutation(TOGGLE_FAVORITE_HERO);

  return (
    <Card
      key={hero.id}
      thumbnail={hero.thumbnail || ""}
      name={hero.name}
      id={hero.id}
      to={`/characters/${hero.id}`}
      body={<p>{hero.description}</p>}
      marked={hero.isFavorite}
      onToggleFavorite={() => toggleFavorite({ variables: { hero } })}
    />
  );
};
