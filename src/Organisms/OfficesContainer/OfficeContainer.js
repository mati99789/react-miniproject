import React from 'react';
import OfficeStyle from './Office.style';
import officesData from '../../data/offices.json';
import SubTitle from '../../Atoms/SubTitle/SubTitle';
import OfficeItem from '../../Atoms/OfficeItem/OfficeItem';

const OfficeContainer = function () {
  return (
    <OfficeStyle>
      <SubTitle title="Our Offices" />
      {officesData.map((office) => {
        return <OfficeItem key={office.id} {...office} />;
      })}
    </OfficeStyle>
  );
};

export default OfficeContainer;
