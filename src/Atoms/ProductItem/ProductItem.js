import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = function ({ id, name, info }) {
  function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return `${str.slice(0, num)}  ...`;
  }

  return (
    <div>
      <h3>{name}</h3>
      <p>{truncateString(info, 500)}</p>
      <Link to={`/products/${id}`}>Read more</Link>
    </div>
  );
};

export default ProductItem;
