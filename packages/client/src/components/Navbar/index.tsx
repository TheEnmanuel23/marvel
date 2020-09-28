import React from "react";
import clsx from "clsx";
import { StyledNav, StyledLi } from "./styles";

export interface NavbarProps {
  children: React.ReactElement | React.ReactElement[];
}

export interface NavbarItemProps extends NavbarProps {
  active?: Boolean;
}

export const NavbarItem = ({ active = false, children }: NavbarItemProps) => {
  const classes = clsx("navbar-item", {
    active,
  });

  return <StyledLi className={classes}>{children}</StyledLi>;
};

export const Navbar = ({ children }: NavbarProps) => {
  return (
    <StyledNav>
      <ul>{children}</ul>
    </StyledNav>
  );
};
