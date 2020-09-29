import React from "react";
import { Wrapper, Badge } from "./styles";
import { ButtonLink } from "../Button";
import { Link } from "react-router-dom";

export interface CardProps {
  thumbnail: string;
  name: string;
  id: string | number;
  to: string;
  body?: React.ReactElement | React.ReactElement[];
  badge?: string;
}

export const Card = ({ thumbnail, name, id, to, body, badge }: CardProps) => {
  return (
    <Wrapper>
      {badge && <Badge>{badge}</Badge>}
      <div>
        {thumbnail && <img height="300" width="300" src={thumbnail} />}
        <h2>{name}</h2>
      </div>
      {body}
      <ButtonLink component={Link} to={to} label={`Go #${id}`} />
    </Wrapper>
  );
};
