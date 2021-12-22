import React from 'react';
import HeroContent from '../Molecules/HeroContent/HeroContent';
import GeneralInformations from '../Organisms/GeneralInformations/GeneralInformations';
import Footer from '../Organisms/Footer/Footer';

const Homepage = function () {
  return (
    <>
      <HeroContent />
      <GeneralInformations />
      <Footer />
    </>
  );
};

export default Homepage;
