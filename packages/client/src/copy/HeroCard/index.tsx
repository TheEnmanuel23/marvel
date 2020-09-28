import React from "react";
import { Wrapper, Actions } from "./styles";
import { ButtonLink } from "../../components/Button";
import { Favorite } from "../../components/Favorite";

export interface HeroCardProps {
  thumbnail: string;
  name: string;
  id: string | number;
  description?: string;
  [x: string]: any;
}

export const HeroCard = ({
  thumbnail,
  name,
  id,
  description,
  ...props
}: HeroCardProps) => {
  return (
    <Wrapper className="hero-card" {...props}>
      <div className="header">
        <h2>{name}</h2>
        <img height="500" width="500" src={thumbnail} />
      </div>
      <p>{description}</p>
      <Actions>
        <Favorite />
        <ButtonLink to={`/characters/${id}`}>Go #{id}</ButtonLink>
      </Actions>
    </Wrapper>
  );
};
