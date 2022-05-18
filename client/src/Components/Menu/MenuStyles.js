import styled from "styled-components";

export const CategoryContainer = styled.div`
  /* background-color: blue; */
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  padding-bottom: 4rem;
  margin-bottom: 4rem;
`;
export const Categories = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TitleContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 600px) {
    width: 80%;
    justify-content: center;
  }
`;
export const Title = styled.p`
  align-self: center;
  color: ${(props) => (props.title ? props.title : "white")};
  width: 62%;
  font-family: Helvetica Neue;
  font-weight: 345;
  font-style: normal;
  font-size: 80px;
  margin-bottom: 5rem;
  @media screen and (max-width: 600px) {
    font-size: 65px;
    margin-bottom: 3rem;
    width: 100%;
    justify-self: center;
    margin-top: 2rem;
  }
`;
export const Image = styled.div`
  /* align-self: center; */
  width: 80%;
  position: relative;
  height: 0;
  padding-bottom: 80%;
  z-index: 10;
  transform: translateY(-1rem);
  background-color: red;
  backdrop-filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 20px;
  @media screen and (max-width: 600px) {
    transform: translateY(0rem);
  }
`;
export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem 2rem;
  /* padding: 7%; */
`;
export const Description = styled.p`
  color: ${(props) => (props.description ? props.description : "white")};
  width: 83.5%;
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 50px;
  @media screen and (max-width: 1200px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.3rem;
    line-height: 40px;
  }
`;
export const ToTopButton = styled.button`
  top: 600px;
  bottom: none;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 20;
  position: fixed;
  /* position: sticky; */
  /* z-index: -10; */
  margin-left: 10px;
  background: rgba(13, 104, 120, 0.75);
  border-radius: 50%;
  border: ${(props) => (props.color ? "none" : "5px solid #FFFFFF")};
  height: 100px;
  width: 100px;
  cursor: pointer;
`;
export const Top = styled.span`
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  text-align: center;
  color: #fff;
`;
export const ServiceTitle = styled.div``;
