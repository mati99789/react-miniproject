import React from 'react';
import ProductWrapper from './Products.styled';
import SubTitle from '../../Atoms/SubTitle/SubTitle';
import Products from '../../Molecules/Products/Products';

const ProductContainer = function () {
  return (
    <ProductWrapper>
      <SubTitle title="Our Products" />
      <Products />
    </ProductWrapper>
  );
};

export default ProductContainer;
