import React from "react";
import ArrowIcon from "./Arrow.svg";
import StarIcon from "./Star.svg";

export const Arrow = () => <img src={ArrowIcon} alt="arrow" />;

export const Star = (props: any) => (
  <img {...props} height="25" src={StarIcon} alt="star" />
);
