import React from 'react';
import logo from '../../assets/logo-big.png';
import { Theme } from '../../theme';

const NavBar = () => (
  <nav css={Theme.NavBar}>
    <div css={Theme.NavBarTitle}>
      <a href="">
        <img src={logo} alt="" />
      </a>
    </div>
    <div css={Theme.NavBarMenu} />
  </nav>
);

export default NavBar;
