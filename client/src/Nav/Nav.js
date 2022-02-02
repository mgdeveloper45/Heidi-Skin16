import { Header, Heading, Icons, List, Navi, P, Span } from './NavStyles';
import { BsCart3, BsSearch } from 'react-icons/bs';

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
                <List><P>Salon Service</P></List>
                <List><P>Buy Products</P></List>
                <List><P>Contact Us</P></List>
            </Navi>
        </>
    )
}

export default Nav
