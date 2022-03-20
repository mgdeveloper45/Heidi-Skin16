import React from "react";
import "./AnimationStyles.css"
import {
  Book,
  Deserve,
  LeftImg,
  Logo,
  MainContainer,
  MainImg,
  More,
  Name,
  Page,
  Protocol,
  RightImg,
  Session,
  SlidingImg,
  Span,
  Statement,
} from "./LandingStyles";
import Addresss from "./Addresss";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const animateThat = () => {
    const animatedTHIS = document.querySelector(".rightImg");
    animatedTHIS.classList.add("rightBox");
    animatedTHIS.style.marginRight = "50%";
  };
  
  return (
    <Page>
      <MainContainer>
        {/* <MainImg> */}
        <SlidingImg className="slidingImg">
          <RightImg className="rightImg"/>
          <LeftImg className="leftImg"/>
        </SlidingImg>
        {/* </MainImg> */}
          <Logo>
            <More>
              You <Deserve>Deserve</Deserve> More
            </More>
            <Statement>
            <Session>
              <Book className="book" onClick={() => {animateThat()}}>Book a Session</Book>
            </Session>
                <Protocol>In-Salon appointments only.</Protocol>
                <Link
                  to="policy"
                  style={{ textDecoration: "none", color: "black" }}
                  >
                  <Protocol>Appointment Policy</Protocol>
                </Link>
                <Link
                  to="covid"
                  style={{ textDecoration: "none", color: "black" }}
                  >
                  <Protocol>Covid Protocols</Protocol>
                </Link>
            </Statement> 
                  <Name>
                    <Span>Heidi</Span>Skin16
                  </Name>
          </Logo>
      </MainContainer>
      <Addresss />
    </Page>
  );
};

export default LandingPage;
