import styled from "styled-components";

export const CategoryContainer = styled.div`
    /* background-color: blue; */
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
    font-weight: 345; 
    font-style: normal;
    font-size: 80px; 
`;
export const Image = styled.div`
    width: 596px;
    height: 496px;
    z-index: 10;
    margin-top: -25px;
    background-color: red;
    backdrop-filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 20px;
`;
export const DescriptionContainer = styled.div`
    display: flex;
    justify-content: center;
`;
export const Description = styled.p`
    color: ${props => props.color 
    ? "#000" : "#fff"};
    width: 80%;
    height: 330px;
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: 300;
    font-size: 35px;
`;
export const ToTopButton = styled.button`
    top: 600px;
    bottom: none;
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    z-index: 1;
    position: fixed;
    /* position: sticky; */
    /* z-index: -10; */
    margin-left: 10px;
    background: rgba(13, 104, 120, 0.75);
    border-radius: 50%;
    border: ${props => props.color
    ? "none" : "5px solid #FFFFFF"
    };
    height: 100px;
    width: 100px;
`;
export const Top = styled.span`
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    text-align: center;
    color: #FFF;
`;
export const ServiceTitle = styled.div`

`;