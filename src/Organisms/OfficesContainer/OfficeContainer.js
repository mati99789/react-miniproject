import React from 'react';
import OfficeStyle from './Office.style';
import officesData from '../../data/offices.json';
import SubTitle from '../../Atoms/SubTitle/SubTitle';

const OfficeContainer = function () {
  return (
    <OfficeStyle>
      <SubTitle title="Our Offices" />
      {officesData.map((office) => {
        return (
          <div key={office.id}>
            <h3>{office.city}</h3>
            <img src={office.img} alt="" />
            <p>{office.info}</p>
          </div>
        );
      })}
    </OfficeStyle>
  );
};

export default OfficeContainer;
