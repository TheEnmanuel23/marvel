import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background: black;
  border-radius: 10px;
  padding: 20px;
  color: white;

  nav ul {
    margin: 0;
    padding: 0;
  }
`;

export const Picture = styled.picture`
  margin-right: 20px;

  img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
  }
`;
