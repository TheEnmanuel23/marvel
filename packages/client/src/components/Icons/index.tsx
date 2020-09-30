import React from "react";
import ArrowIcon from "./Arrow.svg";
import StarMarkIcon from "./star_mark.svg";
import StarUnmarkIcon from "./star_unmark.svg";

export const Arrow = () => <img src={ArrowIcon} alt="arrow" />;

export const StarMark = (props: any) => (
  <img {...props} height="25" src={StarMarkIcon} alt="mark" />
);

export const StarUnmark = (props: any) => (
  <img {...props} height="25" src={StarUnmarkIcon} alt="unmark" />
);
