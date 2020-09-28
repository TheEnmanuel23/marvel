import styled from "styled-components";

export const Wrapper = styled.div`
  font-size: 15px;
  color: black;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  span {
    margin-left: 7px;
  }
`;
