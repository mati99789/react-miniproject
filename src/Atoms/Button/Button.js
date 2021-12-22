import React from 'react';
import ButtonStyled from './Button.styled';

const Button = function ({ children }) {
  return <ButtonStyled type="button">{children} </ButtonStyled>;
};

export default Button;
