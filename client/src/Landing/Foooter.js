import React from 'react'
import { 
    Declaration, Foot, Footer, 
    HR, LI, NAME, Policy, Rights, 
    Span, Social, UL 
} from './FooterStyles';
import { AiOutlineGoogle } from 'react-icons/ai';
import { FaFacebook, FaTwitter, FaYelp } from 'react-icons/fa';

const Foooter = () => {
    const styles = {
        icons: {
            height: "55px",
            width: "55px",
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
        <Footer>
                <Declaration>
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
                </Declaration>
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
    )
}

export default Foooter
