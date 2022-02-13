import styled from "styled-components";

export const AddON = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-evenly;
`;
export const AddOnContainer = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: ${props => props.bgColor 
    ? "rgba(216, 155, 166, 0.75)"
    : "rgba(13, 104, 120, 0.75)" 
};
`;
export const Price = styled.span`

`;
export const Title = styled.div`
    color: ${props => props.color 
    ? "#000" : "#fff"};
    width: 550px;
    font-family: Helvetica Neue;
    font-weight: 400; 
    font-style: normal;
    font-size: 120px;
`;
export const Image = styled.div`
    width: 696px;
    height: 696px;
    z-index: 10;
    margin-top: -35px;
    background-color: red;
    backdrop-filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 20px;
`;
export const ServiceTitle = styled.p`
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: normal;
    font-size: 45px;
`;

