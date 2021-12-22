import React from 'react';
import GeneralInformation from './GeneralInformationContent.styled';

const GeneralInformationContent = function ({ info, img }) {
  return (
    <GeneralInformation>
      <img src={img} alt="" />
      <p>{info}</p>
    </GeneralInformation>
  );
};

export default GeneralInformationContent;
