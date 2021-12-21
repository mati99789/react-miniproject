import React, { useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react';
import Wrapper from './Header.styled';
import Menu from '../../Molecules/NavigationBar/Menu';
import Title from '../../Atoms/Title/Title';

const Header = function () {
  const [isOpen, setOpen] = useState(false);
  return (
    <Wrapper>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <Title title="QWERTY AB" />
      <Menu isOpen={isOpen} />
    </Wrapper>
  );
};

export default Header;
