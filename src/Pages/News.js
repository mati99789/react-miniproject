import React from 'react';
import GeneralInformations from '../Organisms/GeneralInformations/GeneralInformations';
import Footer from '../Organisms/Footer/Footer';
import NewsContainer from "../Organisms/NewsContainer/NewsContainer";

const News = function () {
  return (
    <>
      <GeneralInformations />
      <NewsContainer />
      <Footer />
    </>
  );
};

export default News;
