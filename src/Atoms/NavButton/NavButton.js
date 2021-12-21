import React from 'react';
import { Sling as Hamburger } from 'hamburger-react';

const NavButton = function ({ isActive, setIsActive }) {
  return <Hamburger toggled={isActive} toggle={setIsActive} />;
};

export default NavButton;
