import React from 'react';
import { 
    Appointment, Bold, Book, 
    Deserve, Logo, 
    MainContainer, MainImg, 
    More, Name, Page, Policy, 
    Protocol, Session, Span, 
    Statement
} from './LandingStyles';
import Addresss from './Addresss';
import { Link } from 'react-router-dom';

const LandingPage = () => {

    return (
        <Page>
            <MainContainer>
                <MainImg>
                    <Logo> 
                        <Deserve>
                            <More>You<Bold>Deserve</Bold>More</More>
                        </Deserve>
                        <Session>
                            <Book>Book a Session</Book>
                        </Session>
                        <Statement>
                            <Appointment>
                                <Protocol>
                                    In-Salon appointments only.
                                </Protocol>
                            </Appointment>
                            <Policy>
                                <Link to="policy" style={{textDecoration:"none", color: "black"}}>
                                    {/* <Policy> */}
                                        <Protocol>Appointment Policy</Protocol>
                                    {/* </Policy */}
                                </Link>
                                <Link to="covid" style={{textDecoration:"none", color: "black"}}>
                                    {/* <Covid> */}
                                        <Protocol>Covid 19 Protocols</Protocol>
                                    {/* </Covid> */}
                                </Link>
                            </Policy>
                        </Statement>
                        <Name><Span>Heidi</Span>Skin16</Name>
                    </Logo>
                </MainImg> 
            </MainContainer>
            <Addresss />
        </Page>
    )
}

export default LandingPage