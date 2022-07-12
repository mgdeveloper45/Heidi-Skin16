import styled from "styled-components";

export const DropContainer = styled.div``;

export const MenuBtn = styled.button`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background: none;
  border: none;
  /* font-size: 40px; */
`;

export const MenuPosition = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Menu = styled.div`
  text-align: center;
  /* font-size: 20px; */

  background-color: var(--pink);
  position: absolute;
  padding: 1rem;
  letter-spacing: 0.05rem;
  border-radius: 5px;
  z-index: 1;

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

export const CategoryLinks = styled.div``;
