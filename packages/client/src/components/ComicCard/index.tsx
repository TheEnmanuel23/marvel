import { useMutation } from "@apollo/react-hooks";
import React from "react";
import { Comic } from "../../@types/customTypes";
import { TOGGLE_FAVORITE_COMIC } from "../../graphql/favorite";
import { Card } from "../Card";

export const ComicCard = ({ comic }: { comic: Comic }) => {
  const [toggleFavorite] = useMutation(TOGGLE_FAVORITE_COMIC);

  return (
    <Card
      key={comic.id}
      thumbnail={comic.thumbnail || ""}
      name={`${comic.issueNumber} - ${comic.title}`}
      id={comic.id}
      to={`/comics/${comic.id}`}
      badge={comic.format || ""}
      marked={comic.isFavorite}
      onToggleFavorite={() => toggleFavorite({ variables: { comic } })}
    />
  );
};
