import React from "react";
import { Wrapper } from "./styles";
import { ButtonLink } from "../Button";

export interface CardProps {
  thumbnail: string;
  name: string;
  id: string | number;
  to: string;
}

export const Card = ({ thumbnail, name, id, to }: CardProps) => {
  return (
    <Wrapper>
      <div>
        {thumbnail && <img height="300" width="300" src={thumbnail} />}
        <h2>{name}</h2>
      </div>
      <ButtonLink to={to}>Go #{id}</ButtonLink>
    </Wrapper>
  );
};
