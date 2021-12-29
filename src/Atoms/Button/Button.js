import React from 'react';
import ButtonStyled from './Button.styled';

const Button = function ({ children, btnType }) {
  return <ButtonStyled type={btnType && btnType || 'button'}>{children} </ButtonStyled>;
};

export default Button;
