import React from 'react';
import logo from '../assets/logo-big.png';
import { theme } from '../../theme';

const NavBar = () => (
  <nav css={theme.NavBar}>
    <div css={theme.NavBarTitle}>
      <a href="">
        <img src={logo} alt="" />
      </a>
    </div>
    <div css={theme.NavBarMenu} />
  </nav>
);

export default NavBar;
