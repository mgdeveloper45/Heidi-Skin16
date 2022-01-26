import React from 'react'
import { Header, Heading, List, Navi, P, Span } from './NavStyles'

const Nav = () => {
    return (
        <>
            <Header>
                <Heading>
                    <Span>HEIDI</Span>SKIN16
                </Heading>
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
