import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Title from '../Atoms/Title/Title';
import Button from '../Atoms/Button/Button';

const Wrapper = styled.div`
    background-color: #e9c46a;
    box-shadow: 5px 5px 15px 5px #6e97c3;
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 10px;
    color: #fff;
`;


const Error = function () {
  return (
    <Wrapper style={{ marginTop: '7rem' }}>
      <Title title="Site your are looking for doesn't exisist" />
      <Button type="button">
        <Link to="/">Go back to homepage</Link>
      </Button>
    </Wrapper>
  );
};

export default Error;
