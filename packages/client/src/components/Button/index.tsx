import React from "react";
import { Wrapper, StyledButton } from "./styles";
import { Arrow } from "../Icons";
export interface ButtonLinkProps {
  label: any;
  component?: React.ReactElement | React.ReactElement[];
  [x: string]: any;
}

export const ButtonLink = ({ component, label, ...props }: ButtonLinkProps) => {
  const Component: any = component || "a";

  return (
    <Wrapper>
      <Component {...props}>
        <span>{label}</span>
        <Arrow />
      </Component>
    </Wrapper>
  );
};

export const Button = StyledButton;
