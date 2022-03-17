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
          <Logo>
            <Session>
              <Book>Book a Session</Book>
            </Session>
            <Statement>
              <Appointment>
                <Protocol>In-Salon appointments only.</Protocol>
              </Appointment>
              <Policy>
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
                  <Protocol>Covid 19 Protocols</Protocol>
                </Link>
              </Policy>
            </Statement>
            <Name>
              <Span>Heidi</Span>Skin16
            </Name>
          </Logo>
        </MainImg>
      </MainContainer>
      <Addresss />
    </Page>
  );
};

export default LandingPage;
