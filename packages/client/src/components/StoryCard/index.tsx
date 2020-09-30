import { useMutation } from "@apollo/react-hooks";
import React from "react";
import { Story } from "../../@types/customTypes";
import { TOGGLE_FAVORITE_STORY } from "../../graphql/favorite";
import { Card } from "../Card";

export const StoryCard = ({ story }: { story: Story }) => {
  const [toggleFavorite] = useMutation(TOGGLE_FAVORITE_STORY);

  return (
    <Card
      key={story.id}
      thumbnail={story.thumbnail || ""}
      name={story.title}
      id={story.id}
      to={`/stories/${story.id}`}
      marked={story.isFavorite}
      onToggleFavorite={() => toggleFavorite({ variables: { story } })}
    />
  );
};
