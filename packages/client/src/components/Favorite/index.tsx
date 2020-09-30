import React from "react";
import { StarMark, StarUnmark } from "../Icons";
import { Wrapper } from "./styles";

export const Favorite = ({
  mark = false,
  onChange,
  className,
}: {
  mark?: boolean;
  onChange?: () => void;
  className?: string;
}) => {
  const Icon = mark ? StarMark : StarUnmark;
  const label = mark ? "Unmark" : "Mark as favorite";

  return (
    <Wrapper onClick={onChange} className={className}>
      <Icon />
      <span>{label}</span>
    </Wrapper>
  );
};
