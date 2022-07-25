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
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const ServiceHeader = styled.h2`
  display: flex;
  justify-content: center;
  /* width: 250px; */
  height: 40px;
  &:hover {
    text-decoration: underline;
  }
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

export const MenuPosition = styled.div``;

export const Menu = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  justify-content: space-around;
  color: black;
  /* height: 300px;
  width: 270px; */
  /* padding: 1rem; */
  /* letter-spacing: 0.05rem; */
  border-radius: 5px;
`;

export const CategoryLinks = styled.div`
  &:hover {
    color: var(--pink);
    cursor: pointer;
  }
`;
