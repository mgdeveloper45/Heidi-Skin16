import React from 'react';
import { 
    Address, Book, Code, Dec, Directions, Foot, Footer, HR, LI, Logo, MainContainer, 
    MainImg, Name, NAME, H3, P, Page, Policy, Rights, Session, Social, Span, UL 
} from './LandingStyles';
import { AiOutlineGoogle } from 'react-icons/ai'
import { TiLocationArrow, TiLocationArrowOutline } from 'react-icons/ti'
import { FaFacebook, FaLocationArrow, FaTwitter, FaYelp } from 'react-icons/fa'

const LandingPage = () => {
    const styles = {
        icons: {
            height: "55px",
            width: "55px",
        },
        location: {
            transform: "rotate(33.75deg)",
            height: "35px",
        },
        yelp: {
            height: "45px", 
            width: "45px", 
            paddingBottom: "5px"
        },
        span: {
            fontSize: "72px"
        }
    }
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
            <Address>
                <H3>817 4th St. #B4 (SFL)</H3>
                <H3>San Rafael, CA 94901</H3>
                <H3>(415) 529-5076 (call only)</H3>
            </Address>
            <Directions>
                <H3>
                    Get Directions 
                    <TiLocationArrow
                    style={styles.location}/>
                </H3> 
            </Directions>
            <Code>
                <P>Service by Appointment only.</P>
                <P>Door Code Required.</P>
            </Code>
            <Footer>
                <Dec>
                    <UL>
                        <LI>About Us</LI>  
                        <LI>Gallery</LI>
                        <LI>Reviews</LI>
                        <LI>Contact Us</LI>
                    </UL>
                    <Policy>
                        <LI>Appointment Policy</LI>
                        <LI>Cancellation Policy</LI>
                        <LI>Covid 19 Protocols</LI>
                        <LI>Bookings</LI>
                    </Policy>
                </Dec>
                <HR/>
                <Foot>
                    <NAME><Span style={styles.span}>Heidi</Span>Skin16</NAME>
                    <Rights>&copy; 2022 All Rights Reserved HeidiSkin16</Rights>
                    <Social>
                        <FaFacebook style={styles.icons}/>
                        <FaTwitter style={styles.icons}/>
                        <AiOutlineGoogle style={styles.icons}/>
                        <FaYelp style={styles.yelp}/>
                    </Social>
                </Foot>
            </Footer>
        </Page>
    )
}

export default LandingPage