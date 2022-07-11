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
export const Heading = styled.p`
  align-items: center;
  font-weight: 700;
  font-style: normal;
  /* font-size: 60px; */
`;
export const Span = styled.span`
  font-weight: 200;
  font-style: normal;
  /* font-size: 60px; */
  @media (max-width: 768px) {
    /* font-size: 40px; */
  }
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
  background-color: white;
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

export const P = styled.p`
  display: flex;
  justify-content: center;
  width: 250px;
  height: 40px;
  font-style: normal;
  font-weight: normal;
  /* font-size: 24px; */
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
  height: 300px;
  width: 270px;
  padding: 1rem;
  letter-spacing: 0.05rem;
  border-radius: 5px;
`;

export const CategoryLinks = styled.div`
  &:hover {
    color: var(--pink);
    cursor: pointer;
  }
`;
