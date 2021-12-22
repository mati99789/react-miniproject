import React from 'react';
import { Link } from 'react-router-dom';
import OfficeStyle from './OfficeItem.styled';
import Button from '../Button/Button';

const OfficeItem = function ({ city, img, info, id }) {
  function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return `${str.slice(0, num)}  ...`;
  }

  return (
    <OfficeStyle>
      <h3>{city}</h3>
      <img src={img} alt="" />
      <p>{truncateString(info, 200)}</p>
      <Button type="button">
        <Link to={`/offices/${id}`}>Read more..</Link>
      </Button>
    </OfficeStyle>
  );
};

export default OfficeItem;
