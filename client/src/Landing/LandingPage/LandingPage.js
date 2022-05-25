import React, { useEffect } from "react";
import "../AnimationStyles.css";
import { useSearchParams } from "react-router-dom";
import {

  Appointments, Book, Deserve, LeftImg, Logo, MainContainer,
  MainImg, More, Name, Page, Policy, Protocol, RightImg,
  Session, SlidingImg, Span, Statement
} 
from "./LandingStyles";
import About from "../../About/About"
import Addresss from "../Address/Addresss";
import Gallery from "../../Gallery/Gallery";

const LandingPage = ({ animate, close, setVisible, visible }) => {
  const [visibleStatus] = useSearchParams();

  useEffect(() => {
    if (visibleStatus.get("visible")) {
      setVisible(true)
      const animatedImg = document.querySelector(".rightImg");
      animatedImg.classList.add("rightBox");
      animatedImg.classList.remove("rightBoxes");
      animatedImg.style.marginRight = "50%";
    };
  }, [visibleStatus, setVisible]);


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
                <Protocol 
                  onClick={() => close("/policy")}
                  style={{
                    visibility: visible ? "visible" : "hidden",
                  }}>Appointment Policy
                </Protocol>

                <Protocol 
                  onClick={() => close("/covid")}
                  style={{
                    visibility: visible ? "visible" : "hidden",
                  }}>Covid Protocols
                </Protocol>
            </Policy>
          </Statement>
          <Name visible={visible}>
            <Span>Heidi</Span>Skin16
          </Name>
        </Logo>
      </MainContainer>
      {visible ? <><Gallery /> <About /></> : <Addresss />}
    </Page>
  );
};

export default LandingPage;
