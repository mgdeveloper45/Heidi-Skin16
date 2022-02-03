import { Header, Heading, Icons, List, Navi, P, Span } from './NavStyles';
import { BsCart3, BsSearch } from 'react-icons/bs';
import { Link } from "react-router-dom";

const Nav = () => {
   
    return (
        <>
            <Header>
                <Heading>
                    <Span>HEIDI</Span>SKIN16
                </Heading>
                <Icons>
                    <BsSearch size={30}/>
                    <BsCart3 style={{marginLeft:"10px"}} size={30}/>
                </Icons>
            </Header>
            <Navi>
                <List> 
                    <Link to="/salonservice">
                        <P>Salon Service</P>
                    </Link>
                </List>
                <List> 
                    <Link to="/buyproducts">
                        <P>Buy Products</P>
                    </Link>
                </List>
                <List> 
                    <Link to="/contactus">
                        <P>Contact Us</P>
                    </Link>
                </List>
            </Navi>
        </>
    )
}

export default Nav
