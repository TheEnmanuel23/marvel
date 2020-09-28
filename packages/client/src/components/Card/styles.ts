import styled from "styled-components";

export const Wrapper = styled.div`
  background: white;
  padding: 10px;
  width: 300px;
  box-shadow: 0px 0px 5px #9fa320;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  h2 {
    text-align: center;
  }
`;

export const Badge = styled.span`
  background: #11ff30;
  text-align: center;
  border-radius: 8px;
  position: absolute;
  padding: 5px;
  right: 20px;
  top: 20px;
`;
