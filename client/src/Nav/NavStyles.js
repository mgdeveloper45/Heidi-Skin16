import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 150px;
    width: 100%;
    margin-top: 0;
    border: none;
    background-color: rgba(223, 213, 177, 0.5);
`;
export const Heading = styled.p`
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
    justify-content: flex-end;
    width: 38%;
    margin-right: 20px;
`;
export const Navi = styled.div`
    height: 150px;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;
export const List = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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


