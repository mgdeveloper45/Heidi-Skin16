import styled from "styled-components";

export const DropContainer = styled.div``;

export const MenuBtn = styled.button`
  width: 40px;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  color: var(--pink);
  margin-left: 20px;

  background: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const MenuPosition = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Menu = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  justify-content: space-around;
  color: black;
  height: 300px;
  width: 270px;
  padding: 1rem;
  letter-spacing: 0.05rem;
  border-radius: 5px;

  a:visited,
  a:link,
  a:active {
    text-decoration: none;
    color: black;
    :hover {
      color: gray;
    }
  }
`;

export const CategoryLinks = styled.div`
  &:hover {
    color: var(--pink);
  }
`;
