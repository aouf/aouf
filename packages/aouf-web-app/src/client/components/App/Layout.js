import React from 'react';
import { Global } from '@emotion/core';
import Navbar from './Navbar';
import Footer from './Footer';

import { GlobalSettings } from '../../theme';

const Layout = ({ children }) => (
  <>
    <Global styles={GlobalSettings} />
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;
