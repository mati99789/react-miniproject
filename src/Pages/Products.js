import React from 'react';
import GeneralInformations from '../Organisms/GeneralInformations/GeneralInformations';
import ProductContainer from '../Organisms/ProductContainer/ProductContainer';
import Footer from '../Organisms/Footer/Footer';

const Products = function () {
  return (
    <>
      <GeneralInformations />
      <ProductContainer />
      <Footer />
    </>
  );
};

export default Products;
