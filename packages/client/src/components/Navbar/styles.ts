import styled from "styled-components";

export const StyledNav = styled.nav`
  background: black;
  height: 60px;
  width: 100%;
  border-radius: 10px;

  ul {
    height: 100%;
    list-style: none;
    display: flex;
    align-items: center;
  }
`;

export const StyledLi = styled.li`
  font-size: 20px;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  a {
    color: white;
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
  }

  & ~ li {
    margin-left: 20px;
  }

  &.active:after {
    content: "";
    height: 5px;
    width: 100%;
    background: yellow;
  }
`;
