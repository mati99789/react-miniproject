import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../Atoms/Title/Title';
import Button from '../Atoms/Button/Button';

const Error = function () {
  return (
    <div style={{ marginTop: '7rem' }}>
      <Title title="Site your are looking for doesn't exisist" />
      <Button type="button">
        <Link to="/">Go back to homepage</Link>
      </Button>
    </div>
  );
};

export default Error;
