import styled from "styled-components";
import fullImg from "../../images/full_face_cropped.png";
import leftImg from "../../images/left_side_landing_cropped.png";
import rightImg from "../../images/landing2_right_cropped.png";

// landing page with main image
export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const MainContainer = styled.div`
  width: 100%;
  height: 780px;
  position: relative;
  background: rgba(216, 155, 166, 0.75);
  display: flex;
  justify-content: center;
`;
export const MainImg = styled.div`
  visibility: ${
    props => props.visible 
    ? "hidden" : "visible"
  };
  background-repeat: no-repeat;
  background-size: cover;
  width: 850px;
  height: 825px;
  margin-top: 10px;
  background-image: url("${fullImg}");
  border-radius: 20px 20px 0px 0px;
  display: flex;
  position: absolute;
`;
export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* height: 425px; */
`;
export const Name = styled.div`
  visibility: ${
    props => props.visible 
    ? "hidden" : "visible"
  };
  display: flex;
  align-items: flex-start;
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 700;
  font-size: 90px;
  height: 90px;
  z-index: ${
    props => props.visible 
    ? "-1" : "1"
  };
`;
export const Span = styled.span`
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 200;
  font-size: 90px;
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
  z-index: ${
    props => props.visible 
    ? "-1" : "1"
  };
  background-color: rgba(13, 104, 120, 0.75);
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
`;
export const SlidingImg = styled.div`
  visibility: ${
    props => props.visible 
    ? "visible" : "hidden"
  };
  width: 100%;
  height: 825px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  position: absolute;
  `;
export const LeftImg = styled.div`
  background-image: url(${leftImg});
  border-radius: 0px 20px 0px 0px;
  background-repeat: no-repeat;
  background-size: cover;
  width: 425px;
  height: 825px;
  margin-top: 10px;
`;
export const RightImg = styled.div`
  background-image: url(${rightImg});
  border-radius: 20px 0px 0px 0px;
  background-repeat: no-repeat;
  background-size: cover;
  width: 425px;
  height: 825px;
  margin-top: 10px;
`;
export const Covid = styled.div``;
export const Deserve = styled.span`
  font-family: Helvetica Neue;
  font-weight: 700;
  font-style: normal;
  font-size: 120px;
`;
export const More = styled.div`
  font-family: Helvetica Neue;
  font-weight: 300;
  font-style: normal;
  font-size: 70px;
  height: 200px;
`;
export const Policy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100px;
  z-index: ${
    props => props.visible 
    ? "10" : "0"
  };
 

`;
export const Appointments = styled.p`
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  
`;
export const Protocol = styled.p`
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  &:hover {
    text-decoration: underline;
  }
  `;
export const Statement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 552px;
  height: 340px;
`;

