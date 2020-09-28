import React from "react";
import { Star } from "../Icons";
import { Wrapper } from "./styles";

export const Favorite = () => {
  return (
    <Wrapper>
      <Star />
      <span>Mark as favorite</span>
    </Wrapper>
  );
};
