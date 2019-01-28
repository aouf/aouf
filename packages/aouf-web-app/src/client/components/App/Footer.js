import React from 'react';
import logo from '../../assets/aouf-nb.png';

import { Theme } from '../../theme';

const Footer = () => (
  <footer css={Theme.Footer}>
    <img src={logo} alt="Aouf" />
  </footer>
);

export default Footer;
