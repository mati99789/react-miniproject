import React from 'react';

import { Link } from 'react-router-dom';
import navigationData from '../../data/navigationData.json';
import Wrapper from './MenuStyles';

const Menu = function ({ isOpen }) {
  return (
    <Wrapper isOpen={isOpen}>
      <ul>
        {navigationData.map((item) => (
          <li key={item.id}>
            <Link to={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Menu;
