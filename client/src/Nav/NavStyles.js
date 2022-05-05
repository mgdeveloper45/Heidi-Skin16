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
  height: 150px;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
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
  font-size: 35px;
  &:hover {
    text-decoration: underline;
  }
`;
