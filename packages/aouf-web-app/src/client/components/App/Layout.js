import React from 'react';
// import logo from '../assets/logo-big.png';
import { Global } from '@emotion/core';
import NavBar from './NavBar';

import { GlobalSettings } from '../../theme';

const Layout = ({ children }) => (
  <>
    <Global styles={GlobalSettings} />
    <NavBar />
    {children}
    <footer />
  </>
);

export default Layout;
