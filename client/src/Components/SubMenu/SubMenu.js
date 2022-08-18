import React from "react";
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
  Row,
  Time,
  Title,
} from "./SubMenuStyles";

const SubMenu = ({ item, idx }) => {
  return (
    <SubMenuContainer>
      <ContentContainer key={idx}>
        {window.innerWidth > 600 ? (
          <>
            <Image border={item.color} image={item.image} />
            <Content>
              <Listing>
                <Title>{item.title}</Title>
              </Listing>
              <Row>
                <Price>{item.price}</Price>
                <Time>time: {item.duration} mins</Time>
              </Row>
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
                <Listing>{item.title}</Listing>
              </Title>
              <Price>{item.price}</Price>
              <SndPrice>{item.sndPrice}</SndPrice>
              <Image border={item.color} image={item.image} />
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
