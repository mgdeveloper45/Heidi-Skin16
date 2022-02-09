import styled from "styled-components";

export const CategoryContainer = styled.div`
    background-color: ${props => props.bgColor 
    ? "rgba(216, 155, 166, 0.75)"
    : "rgba(13, 104, 120, 0.75)"
    };
`;
export const Categories = styled.div`
    display: flex;
    justify-content: space-around;
`;
export const Title = styled.p`  
    align-self: center;
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
    border-radius: 20px 20px 0px 0px;
`;
export const DescriptionContainer = styled.div`
    display: flex;
    justify-content: center;
`;
export const Description = styled.p`
    color: ${props => props.color 
    ? "#000" : "#fff"};
    width: 1430px;
    height: 430px;
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
`;