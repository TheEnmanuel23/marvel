import React, { useCallback } from "react";
import styled from "styled-components";
import Tags from "@yaireo/tagify/dist/react.tagify";
import "@yaireo/tagify/dist/tagify.css";

const StyledTag = styled(Tags)`
  width: 300px;
  border: 1px solid #6225e6;
  background: white;
`;

export const Tag = ({
  handleChange,
  ...props
}: {
  handleChange: (tags: { value: string }[]) => void;
  [x: string]: any;
}) => {
  const onChange = useCallback((e: any) => {
    e.persist();
    let values = [];
    if (e.target.value) {
      values = JSON.parse(e.target.value);
    }
    handleChange(values);
  }, []);

  return <StyledTag onChange={onChange} {...props} />;
};
