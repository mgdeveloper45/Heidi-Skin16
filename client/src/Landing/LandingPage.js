import React from 'react';
import { 
    Book, MainContainer, Logo, MainImg, Name, Page, Session, Span
} from './LandingStyles';
import Addresss from './Addresss';
import Foooter from './Foooter';

const LandingPage = () => {

    return (
        <Page>
            <MainContainer>
                <MainImg>
                    <Logo> 
                        <Session>
                            <Book>Book a Session</Book>
                        </Session>
                        <Name><Span>Heidi</Span>Skin16</Name>
                    </Logo>
                </MainImg> 
            </MainContainer>
            <Addresss />
            <Foooter />  
        </Page>
    )
}

export default LandingPage