import React from "react";
import { Wrapper, Link } from "./styles";
import { Arrow } from "../Icons";
export interface ButtonLinkProps {
  to: string;
  children: any;
}

export const ButtonLink = ({ to, children }: ButtonLinkProps) => (
  <Wrapper>
    <Link href={to}>
      <span>{children}</span>
      <Arrow />
    </Link>
  </Wrapper>
);
