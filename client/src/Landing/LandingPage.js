import React from "react";
import {
  Appointment,
  Bold,
  Book,
  Deserve,
  Logo,
  MainContainer,
  MainImg,
  More,
  Name,
  Page,
  Policy,
  Protocol,
  Session,
  Span,
  Statement,
} from "./LandingStyles";
import Addresss from "./Addresss";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Page>
      <MainContainer>
        <MainImg>
        <Name>
          <Span>Heidi</Span>Skin16
        </Name>
        </MainImg>
          <Logo>
            <More>
              You <Deserve>Deserve</Deserve> More
            </More>
            <Statement>
            <Session>
              <Book>Book a Session</Book>
            </Session>
              {/* <Appointment> */}
                <Protocol>In-Salon appointments only.</Protocol>
              {/* </Appointment> */}
              {/* <Policy> */}
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
              {/* </Policy> */}
            </Statement>
            
          </Logo>
        {/* </MainImg> */}
      </MainContainer>
      <Addresss />
    </Page>
  );
};

export default LandingPage;
