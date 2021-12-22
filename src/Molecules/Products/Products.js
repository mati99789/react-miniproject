import React from 'react';
import productsData from '../../data/productsData.json';
import ProductItem from '../../Atoms/ProductItem/ProductItem';

const Products = function () {
  return (
    <>
      {productsData.map((product) => {
        return <ProductItem key={product.id} {...product} />;
      })}
    </>
  );
};

export default Products;
