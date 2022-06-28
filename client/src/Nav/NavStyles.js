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
  background-color: rgba(223, 213, 177, 0.5);
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
  font-family: Helvetica Neue;
  font-style: normal;
  font-size: 60px;
`;
export const Span = styled.span`
  font-weight: 200;
  font-family: Helvetica Neue;
  font-style: normal;
  font-size: 60px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-end;
  /* margin-right: 20px; */
`;

export const Icon = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const Navi = styled.div`
  /* height: 150px; */
  padding: 75px 0;
  background-color: white;
  display: flex;
  flex: wrap;
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-around;
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const P = styled.p`
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  &:hover {
    text-decoration: underline;
  }
`;

// drop down styles

export const DropContainer = styled.div`
  /* margin: 0; */
`;

export const MenuBtn = styled.button`
  /* position: relative; */
  width: 40px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  color: rgba(216, 155, 166, 0.75);

  background: none;
  border: none;
  /* font-size: 40px; */

  /* :hover {
    color: rgba(13, 104, 120, 0.75);
  } */
`;

export const MenuPosition = styled.div`
  /* display: flex;
  justify-content: flex-end; */
`;

export const Menu = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  justify-content: space-around;
  height: 300px;
  width: 270px;
  background-color: rgba(13, 104, 120);
  /* position: absolute; */
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
  color: #fff;
`;
