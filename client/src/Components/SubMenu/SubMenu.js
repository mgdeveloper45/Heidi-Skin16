import React from 'react'
import { Button, Content, ContentContainer, Description, 
    Image, Listing, P, Price, SndPrice, SubMenuContainer, Title 
} from './SubMenuStyles';

const SubMenu = ({item}) => {
  return ( 
    <SubMenuContainer>
        <ContentContainer>
            <Image>{item.image}</Image>
            <Content>
                <Title>
                    <Listing>
                        {item.title}
                        <Price>{item.price}</Price>
                    </Listing>
                    <SndPrice>
                        {item.sndPrice}
                    </SndPrice>
                </Title>
                <Description>
                    {item.description}
                </Description>
            </Content>
        </ContentContainer>
        <Button>
            <P>
                {item.button} 
            </P>
        </Button>
    </SubMenuContainer>
  )
}

export default SubMenu