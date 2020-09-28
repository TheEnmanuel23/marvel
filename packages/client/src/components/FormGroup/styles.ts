import styled from "styled-components";

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  input,
  .tags-input,
  select {
    margin-bottom: 10px;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
