import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Link = styled.a`
  padding: 5px 30px;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  color: white;
  background: #6225e6;
  transition: 1s;
  box-shadow: 6px 6px 0 black;
  transform: skewX(-15deg);
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  align-items: center;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }

  img {
    height: 25px;
  }
`;

export const StyledButton = styled.button`
  padding: 5px 30px;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  color: white;
  background: #6225e6;
  transform: skewX(-15deg);
  text-transform: uppercase;
  font-weight: bold;
`;
