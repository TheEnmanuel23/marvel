import styled from "styled-components";

export const Grid = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0 auto;

  @media only screen and (min-width: 700px) {
    width: 600px;
  }

  .other {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;

    @media only screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
