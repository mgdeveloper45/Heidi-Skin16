import React, { useRef } from "react";
import {
  Button,
  Content,
  ContentContainer,
  Description,
  Image,
  Listing,
  P,
  Price,
  SndPrice,
  SubMenuContainer,
  ButtonContainer,
  Title,
} from "./SubMenuStyles";

const SubMenu = ({ item, idx }) => {
  // const ref = useRef(800)
  return (
    <SubMenuContainer>
      <ContentContainer key={idx}>
        {window.innerWidth > 600 ? (
          <>
            <Image>{item.image}</Image>
            <Content>
              <Title>
                <Listing>
                  {item.title}
                  {/* <Price>{item.price}</Price> */}
                </Listing>
              </Title>
              <Price>{item.price}</Price>
              <SndPrice>{item.sndPrice}</SndPrice>
              <Description>{item.description}</Description>
              <ButtonContainer>
                <Button>
                  <P>{item.button}</P>
                </Button>
              </ButtonContainer>
            </Content>
          </>
        ) : (
          <>
            <Content>
              <Title>
                <Listing>
                  {item.title}
                  {/* <Price>{item.price}</Price> */}
                </Listing>
              </Title>
              <Price>{item.price}</Price>
              <SndPrice>{item.sndPrice}</SndPrice>
              <Image>{item.image}</Image>
              <Description>{item.description}</Description>
              <ButtonContainer>
                <Button>
                  <P>{item.button}</P>
                </Button>
              </ButtonContainer>
            </Content>
          </>
        )}
      </ContentContainer>
    </SubMenuContainer>
  );
};

export default SubMenu;
