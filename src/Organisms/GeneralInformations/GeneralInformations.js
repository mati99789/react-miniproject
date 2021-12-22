import React from 'react';
import GeneralInformationStyles from './GeneralInformations.styled';
import SubTitle from '../../Atoms/SubTitle/SubTitle';
import GeneralInformationContent from '../../Molecules/GeneralInformationContent/GeneralInformationContent';
import generalInformationData from '../../data/generalInformation.json';

const GeneralInformations = function () {
  return (
    <GeneralInformationStyles>
      <SubTitle title="About us" />
      {generalInformationData.map((item) => {
        return <GeneralInformationContent key={item.id} {...item} />;
      })}
    </GeneralInformationStyles>
  );
};

export default GeneralInformations;
