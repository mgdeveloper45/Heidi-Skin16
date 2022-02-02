import styled from "styled-components";
import fullImg from "../images/full_face_cropped.png";
import leftImg from '../images/left_side_landing_cropped.png';
import rightImg from '../images/landing_right_cropped.png';

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
export const Address = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 839px;
    margin-top: 100px;
`;

export const H3 = styled.h3`
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    margin: 10px;
`;

export const Directions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;
  width: 265px;
  background-color: rgba(216, 155, 166, 0.75);
  border-radius: 10px;
`;
export const Code = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 165px;
  width: 335px;
`;
export const P = styled.p`
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  margin: 0;
  padding: 10px 0;
`;
export const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 100vw;
  height: 500px;
  background: rgba(223, 213, 177, 0.5);

`;
export const Dec = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
`;
export const UL = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;  
  /* height: 325px; */
  width: 165px;
`;
export const LI = styled.h1`
  list-style: none;
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
`;
export const Policy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 385px;
  /* height: 325px; */
`;
export const HR = styled.hr`
  border: 2px solid #000;
  width: 81vw;
`;

export const Foot = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* height: 150px; */
    width: 100%;
    /* margin-top: 0;
    border: none;
    background-color: rgba(223, 213, 177, 0.5); */
`;
export const NAME = styled.div`
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
`;
export const Rights = styled.div`
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
`;
export const Social = styled.div`

`;


