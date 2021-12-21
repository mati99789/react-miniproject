import React from 'react';
import { Transition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import navigationData from '../../data/navigationData.json';
import Wrapper from './Menu.styled';

const Menu = function ({ isOpen }) {
  return (
    <Transition in={isOpen} timeout={150}>
      <Wrapper isOpen={isOpen}>
        <ul>
          {navigationData.map((item) => (
            <li key={item.id}>
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </Wrapper>
    </Transition>
  );
};

export default Menu;
