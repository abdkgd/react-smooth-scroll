import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItems, NavLinks, NavBtn, NavBtnLink} from './NavbarElements.jsx'
const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to="/">dolla</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItems>
                            <NavLinks to="about">About</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to="discover">Discover</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to="services">Services</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to="signup">Sign Up</NavLinks>
                        </NavItems>
                    </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="/signin">Sign In</NavBtnLink>
                        </NavBtn>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar
