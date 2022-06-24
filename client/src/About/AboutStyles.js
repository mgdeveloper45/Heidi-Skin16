import styled from "styled-components";
// import aboutImg from "../SlideImages/about_us_cropped.jpeg";

export const AboutContainer = styled.div`
  /* border: 2px solid green; */
`;

export const AboutHeader = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 4rem;
  margin-top: 10px;
`;

export const AboutImageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const AboutImage = styled.img`
  background-image: url(https://res.cloudinary.com/ddvbwfi9a/image/upload/v1655936588/heidi-skin16/about_us_iw8fh0.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 54em;
  width: 38em;
  border-radius: 10px;
  position: relative;
`;

export const Heading = styled.p`
  margin: 1em 0 1em 0;
  text-align: center;
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

export const ParagraphContainer = styled.div``;

export const Paragraph = styled.p`
  padding: 10px;
  font-size: 2em;
  line-height: 60px;
  font-family: "HelveticaNeue-Light", sans-serif;
`;
