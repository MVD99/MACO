import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar2 = () => {
  return (
    <>
      <Nav>
        <NavLink to='/Home'>
            <h1>MACO</h1>
        </NavLink>
        <Bars />
        <NavMenu>

          <NavLink to='/Home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/calendario' activeStyle>
            Calendário
          </NavLink>
          <NavLink to='/MarcarConsulta' activeStyle>
            Agendar
          </NavLink>
          <NavLink to='/PesquisaUtente' activeStyle>
            Pacientes
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/Login'>Sign Out</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar2;