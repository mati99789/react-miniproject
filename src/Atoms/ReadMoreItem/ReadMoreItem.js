import React from 'react';
import { Link } from 'react-router-dom';
import ReadMoreWrapper from './ReadMoreWrapper.styled';
import Button from '../Button/Button';

const ReadMoreItem = function ({ name, info }) {
  return (
    <ReadMoreWrapper>
      <h3>{name}</h3>
      <p>{info}</p>
      <Button type="button">
        <Link to="/products">Back</Link>
      </Button>
    </ReadMoreWrapper>
  );
};

export default ReadMoreItem;
