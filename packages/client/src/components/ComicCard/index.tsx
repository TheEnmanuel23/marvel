import { useMutation } from "@apollo/react-hooks";
import React from "react";
import { Comic } from "../../@types/customTypes";
import {
  ADD_FAVORITE_COMIC,
  REMOVE_FAVORITE_COMIC,
} from "../../graphql/favorite";
import { Card } from "../Card";

export const ComicCard = ({ comic }: { comic: Comic }) => {
  const [addFavorite] = useMutation(ADD_FAVORITE_COMIC);
  const [removeFavorite] = useMutation(REMOVE_FAVORITE_COMIC);

  const toggleFavorite = () => {
    if (comic.isFavorite) {
      return removeFavorite({ variables: { comic: comic } });
    }

    addFavorite({ variables: { comic } });
  };

  return (
    <Card
      key={comic.id}
      thumbnail={comic.thumbnail || ""}
      name={`${comic.issueNumber} - ${comic.title}`}
      id={comic.id}
      to={`/comics/${comic.id}`}
      badge={comic.format || ""}
      marked={comic.isFavorite}
      onToggleFavorite={toggleFavorite}
    />
  );
};
