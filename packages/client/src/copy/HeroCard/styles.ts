import styled from "styled-components";

export const Wrapper = styled.div`
  background: white;
  padding: 15px;
  width: 100%;
  box-shadow: 0px 0px 5px #9fa320;
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      border-radius: 5px;
      padding: 5px;
      border: 1px solid gray;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
