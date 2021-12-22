import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import OfficeStyle from './OfficeDetail.styled';

const OfficeDetailItem = function ({ city, info, img }) {
  return (
    <OfficeStyle>
      <h3>{city}</h3>
      <p>{info}</p>
      <Button type="button">
        <Link to="/offices">Back</Link>
      </Button>
    </OfficeStyle>
  );
};

export default OfficeDetailItem;
