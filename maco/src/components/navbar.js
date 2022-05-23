import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/Home'>
            <h1>MACO</h1>
        </NavLink>
        <Bars />
        <NavMenu>

          <NavLink to='/Perfil' activeStyle>
            Perfil
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/SignOut'>Sign Out</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;