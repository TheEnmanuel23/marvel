import React from "react";
import { Wrapper, Link } from "./styles";
import Arrow from "./Arrow.svg";

export interface ButtonLinkProps {
  to: string;
  children: any;
}

export const ButtonLink = ({ to, children }: ButtonLinkProps) => (
  <Wrapper>
    <Link href={to}>
      <span>{children}</span>
      <img src={Arrow} />
    </Link>
  </Wrapper>
);
