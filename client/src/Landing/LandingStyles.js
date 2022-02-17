import styled from "styled-components";
import fullImg from "../images/full_face_cropped.png";
import leftImg from '../images/left_side_landing_cropped.png';
import rightImg from '../images/landing_right_cropped.png';

// landing page with main image
export const Page = styled.div`
  display: flex; 
  justify-content: space-between;
  flex-direction: column;
  align-items: center; 
`;
export const MainContainer = styled.div`
  width: 100%;
  height: 780px;
  background: rgba(216, 155, 166, 0.75);
  /* border-radius: 20px 20px 0 0; */
  display:flex;
  justify-content: center;
`;
export const MainImg = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    width: 850px;
    height: 825px;
    margin-top: 10px; 
    background-image: url("${fullImg}");
    border-radius: 20px 20px 0px 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;
export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 425px;
`;
export const Name = styled.div`
  justify-items: flex-end;
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 700;
  font-size: 100px;
`;
export const  Span = styled.span`
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: 200;
    font-size: 100px;
`;
export const Book = styled.p`
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: bold;
  font-size: 55px;
  color: #fff;
`;

export const Session = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  height: 138px;
  width: 552px;
  border-radius: 20px;
  left: 589px;
  top: 732px;
  z-index: 10;
  background-color: rgba(13, 104, 120, 0.75);
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
`;
export const LeftImg = styled.div`
    background-image: url(${leftImg});
    width: 20vw;
    height: 925px;
    margin-top: 10px; 
`;

 export const RightImg = styled.div`
     background-image: url(${rightImg});
     width: 20vw;
     height: 925px;
     margin-top: 10px; 
`;
export const Appointment = styled.p`

`; 
export const Bold = styled.span`
  font-family: Helvetica Neue;
  font-weight: 700;
  font-style: normal;
  font-size: 140px;
`; 
export const Covid = styled.div`
  
`; 
export const Deserve = styled.div`
  /* visibility: hidden; */
  z-index: -1
`; 
export const More = styled.h1`
  font-family: Helvetica Neue;
  font-weight: 300;
  font-style: normal;
  font-size: 80px;
`;
// export const Link = styled.link`

// `;  
export const Policy = styled.div`

`; 
export const Protocol = styled.p`

`;
export const Statement = styled.div`

`; 









