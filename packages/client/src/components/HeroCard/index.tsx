import React from "react";
import { Wrapper } from "./styles";
import { ButtonLink } from "../Button";

export interface HeroCardProps {
  thumbnail: string;
  name: string;
  id: string | number;
}

export const HeroCard = ({ thumbnail, name, id }: HeroCardProps) => {
  return (
    <Wrapper>
      <div>
        <img height="300" width="300" src={thumbnail} />
        <h2>{name}</h2>
      </div>
      <ButtonLink to={`/characters/${id}`}>Go #{id}</ButtonLink>
    </Wrapper>
  );
};
