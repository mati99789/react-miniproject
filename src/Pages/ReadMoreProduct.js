import React from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/productsData.json';
import SubTitle from '../Atoms/SubTitle/SubTitle';
import ReadMoreItem from '../Atoms/ReadMoreItem/ReadMoreItem';

const ReadMoreProduct = function () {
  const { id } = useParams();
  const filteredData = productsData.filter((art) => {
    return art.id === parseInt(id, 10);
  });

  const { name, info } = filteredData[0];

  return (
    <div>
      <ReadMoreItem id={id} name={name} info={info} />
    </div>
  );
};

export default ReadMoreProduct;
