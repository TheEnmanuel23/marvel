import styled from "styled-components";

export const Grid = styled.div`
  margin-top: 20px;

  .infinite-scroll-component {
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
