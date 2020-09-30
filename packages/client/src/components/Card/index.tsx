import React from "react";
import { ButtonLink } from "../Button";
import { Link } from "react-router-dom";
import { Favorite } from "../Favorite";
import { Wrapper, Badge, CardHeader } from "./styles";

export interface CardProps {
  thumbnail: string;
  name: string;
  id: string | number;
  to: string;
  body?: React.ReactElement | React.ReactElement[];
  badge?: string;
  marked?: boolean;
  onToggleFavorite?: () => void;
}

export const Card = ({
  thumbnail,
  name,
  id,
  to,
  body,
  badge,
  marked,
  onToggleFavorite,
}: CardProps) => {
  return (
    <Wrapper>
      <CardHeader className="card-header">
        <Favorite
          mark={marked}
          onChange={onToggleFavorite}
          className="fav-btn"
        />
        {badge && <Badge>{badge}</Badge>}
      </CardHeader>
      <div>
        {thumbnail && <img height="300" width="300" src={thumbnail} />}
        <h2>{name}</h2>
      </div>
      {body}
      <ButtonLink component={Link} to={to} label={`Go #${id}`} />
    </Wrapper>
  );
};
