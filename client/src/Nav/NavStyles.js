import styled from "styled-components";

export const NavContainer = styled.div`
  margin-top: 0;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  height: 150px;
  margin-top: 0;
  border: none;
  background-color: var(--gold);
  width: 100%;
`;
export const Head = styled.div``;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Heading = styled.h1`
  align-items: center;
`;
export const Span = styled.span`
  font-weight: 200;
  font-style: normal;
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-end;
`;

export const Icon = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const Navi = styled.div`
  padding: 75px 0;
  background-color: var(--white);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const ServiceHeader = styled.h3`
  display: flex;
  justify-content: center;
  /* width: 250px; */
  /* height: 40px; */
`;

export const DropContainer = styled.div``;

export const MenuBtn = styled.button`
  width: 40px;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  color: var(--pink);
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const MenuPosition = styled.div`
  position: relative;
`;

export const Menu = styled.div`
  width: 250px;
  padding-top: 1rem;
  position: static;
  display: flex;
  flex-flow: column;
  line-height: 2rem;
  text-align: right;
  color: black;
`;

export const CategoryLinks = styled.div`
  &:hover {
    color: var(--pink);
    cursor: pointer;
  }
`;
