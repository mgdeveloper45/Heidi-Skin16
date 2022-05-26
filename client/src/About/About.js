import React from "react";
import {
  AboutContainer,
  AboutHeader,
  AboutImageContainer,
  AboutImage,
  ParagraphContainer,
  Paragraph,
  Heading,
  Span,
} from "./AboutStyles";
import "./About.css";

const About = () => {
  return (
    <AboutContainer >
      <div className="arrow">
        <div className="line"></div>
        <div className="point"></div>
      </div>
      <AboutHeader>About Us</AboutHeader>
      <AboutImageContainer>
        <h3 className="about-live">Live</h3>
        <AboutImage></AboutImage>
        <h3 className="beauty">Beautifully</h3>
      </AboutImageContainer>
      <Heading>
        <Span>HEIDI</Span>SKIN16
      </Heading>
      <ParagraphContainer>
        <Paragraph>
          Enter Owner bio and the mission statement of the company. Can use a
          picture of estetician at work with real clients above, just make sure
          it’s a singular picture that represents your company or products well.
          State your expertise in the field, the products and services you are
          known for.
        </Paragraph>
        <hr />
        <Paragraph>
          Mention how long you have been in the industry What cities and
          counties have you served. Is there anything personal you want your
          customers to know about why you created these products or services. Do
          you have a target demographic.{" "}
        </Paragraph>
        <hr />
        <Paragraph>
          Other esteticians who work at the salon, if any, can be mentioned
          here. Any Additional info.
        </Paragraph>
        <hr />
      </ParagraphContainer>
    </AboutContainer>
  );
};

export default About;
