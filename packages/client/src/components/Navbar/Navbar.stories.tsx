import React from "react";
import { Navbar, NavbarItem } from ".";

export default {
  title: "Components/Navbar",
  component: Navbar,
};

export const Default = () => (
  <Navbar>
    <NavbarItem active>
      <a href="/">Item 1</a>
    </NavbarItem>
    <NavbarItem>
      <a href="/">Item 2</a>
    </NavbarItem>
    <NavbarItem>
      <a href="/">Item 3</a>
    </NavbarItem>
  </Navbar>
);
