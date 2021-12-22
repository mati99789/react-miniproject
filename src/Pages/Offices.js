import React from 'react';
import GeneralInformations from '../Organisms/GeneralInformations/GeneralInformations';
import OfficeContainer from '../Organisms/OfficesContainer/OfficeContainer';
import Footer from '../Organisms/Footer/Footer';

const Offices = function () {
  return (
    <div>
      <GeneralInformations />
      <OfficeContainer />
      <Footer />
    </div>
  );
};

export default Offices;
