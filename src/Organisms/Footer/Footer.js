import React from 'react';
import { FcHome, FcContacts, FcNews } from 'react-icons/fc';
import { Link } from 'react-router-dom';

import FooterStyled from './Footer.styled';

const Footer = function () {
  return (
    <FooterStyled>
      <div>
        <FcHome />
        <Link to="/">Home</Link>
      </div>
      <div>
        <FcNews />
        <Link to="/offices">Office</Link>
      </div>
      <div>
        <FcContacts />
        <Link to="/contact">Contact</Link>
      </div>
    </FooterStyled>
  );
};

export default Footer;
