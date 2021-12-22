import React from 'react';
import { useParams } from 'react-router-dom';
import officeData from '../data/offices.json';
import OficeDetailItem from '../Atoms/OfficeDetailItem/OfficeDetailItem';

const OfficeDetail = function () {
  const { id } = useParams();

  const filteredData = officeData.filter((item) => {
    return item.id === parseInt(id, 10);
  });

  const { name, info, city, img } = filteredData[0];

  return (
    <div>
      <OficeDetailItem name={name} info={info} city={city} img={img} />
    </div>
  );
};

export default OfficeDetail;
