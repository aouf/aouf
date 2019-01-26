import React from 'react';
// import logo from '../assets/logo-big.png';
import { Global } from '@emotion/core';
import { GlobalSettings } from '../../theme';

const Layout = ({ children }) => (
  <>
    <Global styles={GlobalSettings} />
    <nav />
    {children}
    <footer />
  </>
);

export default Layout;
