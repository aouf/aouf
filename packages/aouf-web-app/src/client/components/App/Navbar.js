import React from 'react';
import logo from '../../assets/logo-big.png';

import { Theme } from '../../theme';

const Navbar = () => (
  <nav css={Theme.Navbar}>
    <a href="" css={Theme.NavbarTitle}>
      <img src={logo} alt="" css={Theme.NavbarTitleImage} />
    </a>
    <ul css={Theme.NavbarMenu}>
      <li css={Theme.NavbarMenuItem}>
        <a href="">La plateforme</a>
      </li>
      <li css={Theme.NavbarMenuItem}>
        <a href="">Les fonctionnalités</a>
      </li>
      <li css={Theme.NavbarMenuItem}>
        <a href="">Contact</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
