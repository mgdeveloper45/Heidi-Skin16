import React from "react";
import "./AnimationStyles.css";
import { Link } from "react-router-dom";
import {
  Appointments,
  Book,
  Deserve,
  LeftImg,
  Logo,
  MainContainer,
  MainImg,
  More,
  Name,
  Page,
  Policy,
  Protocol,
  RightImg,
  Session,
  SlidingImg,
  Span,
  Statement,
} from "./LandingStyles";
import Addresss from "./Addresss";
// import { useState } from "react";

const LandingPage = ({animate, visible}) => {
  // const [visible, setVisible] = useState(false);

  // const animateImg = () => {
  //   const animatedImg = document.querySelector(".rightImg");
  //   animatedImg.classList.add("rightBox");
  //   animatedImg.style.marginRight = "50%";
  //   setVisible(true);
  // };

  return (
    <Page>
      <MainContainer>
        <MainImg visible={visible} />
        <SlidingImg className="slidingImg" visible={visible}>
          <RightImg className="rightImg" />
          <LeftImg className="leftImg" />
        </SlidingImg>
        <Logo>
          <div style={{ height: "200px" }}></div>
          <More>
            You <Deserve>Deserve</Deserve> More
          </More>
          <Statement>
            <Session>
              <Book className="book" onClick={() => animate()}>
                Book a Session
              </Book>
            </Session>
            <Appointments>Live Beautifully</Appointments>
            <Policy>
              <Link
                to="policy"
                style={{
                  textDecoration: "none",
                  color: "black",
                  visibility: visible ? "visible" : "hidden",
                }}
              >
                <Protocol>Appointment Policy</Protocol>
              </Link>
              <Link
                to="covid"
                style={{
                  textDecoration: "none",
                  color: "black",
                  visibility: visible ? "visible" : "hidden",
                }}
              >
                <Protocol>Covid Protocols</Protocol>
              </Link>
            </Policy>
          </Statement>
          <Name visible={visible}>
            <Span>Heidi</Span>Skin16
          </Name>
        </Logo>
      </MainContainer>
      <Addresss />
    </Page>
  );
};

export default LandingPage;
