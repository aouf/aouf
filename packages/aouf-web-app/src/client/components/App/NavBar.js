import React from 'react';
import logo from '../../assets/logo-big.png';
import { Theme } from '../../theme';

const NavBar = () => (
  <nav css={Theme.NavBar}>
    <a href="" css={Theme.NavBarTitle}>
      <img src={logo} alt="" css={Theme.NavBarTitleImage} />
    </a>
    <ul css={Theme.NavBarMenu}>
      <li>
        <a href="">La plateforme</a>
      </li>
      <li>
        <a href="">Les fonctionnalités</a>
      </li>
      <li>
        <a href="">Contact</a>
      </li>
    </ul>
  </nav>
);

export default NavBar;
