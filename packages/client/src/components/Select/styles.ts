import styled from "styled-components";

export const Select = styled.select`
  background: white;
  border: 1px solid #cdcdcd;
  outline: none;
  font-size: 18px;
  padding: 8px;
  width: 280px;

  &::placeholder {
    font-family: "Comic Neue", cursive, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
      "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }
`;
