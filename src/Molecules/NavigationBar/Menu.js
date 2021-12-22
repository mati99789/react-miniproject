import React from 'react';
import { Transition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';
import navigationData from '../../data/navigationData.json';
import Wrapper from './Menu.styled';

const Menu = function ({ isOpen }) {
  return (
    <Transition in={isOpen} timeout={150}>
      <Wrapper isOpen={isOpen}>
        <ul>
          {navigationData.map((item) => (
            <li key={item.id}>
              <NavLink activeClassName="selected" exact to={item.url}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </Wrapper>
    </Transition>
  );
};

export default Menu;
