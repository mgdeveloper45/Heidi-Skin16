import React from 'react';
import { 
    Book, Logo, MainContainer, 
    MainImg, Name, Session, Span 
} from './LandingStyles';

const LandingPage = () => {

    return (
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
    )
}

export default LandingPage