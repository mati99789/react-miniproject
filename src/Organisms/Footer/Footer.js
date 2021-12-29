import React from 'react';
import { FcHome, FcContacts, FcNews } from 'react-icons/fc';
import { Link } from 'react-router-dom';

import FooterStyled from './Footer.styled';

const Footer = function () {
  return (
    <FooterStyled>
      <div>
        <FcHome className='icon'/>
        <Link to="/">Home</Link>
      </div>
      <div>
        <FcNews className='icon'/>
        <Link to="/offices">Office</Link>
      </div>
      <div>
        <FcContacts className='icon'/>
        <Link to="/contact">Contact</Link>
      </div>
    </FooterStyled>
  );
};

export default Footer;
