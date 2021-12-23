import React from 'react';
import { Link } from 'react-router-dom';
import CarriersStyle from './CarriersContainer.styled';
import carriersData from '../../data/carriersdata.json';
import Button from '../../Atoms/Button/Button';
import SubTitle from "../../Atoms/SubTitle/SubTitle";

const CarriersContainer = function () {
  return (
    <CarriersStyle>
      <SubTitle title='Join to us!' />
      {carriersData.map((carrier) => {
        return (
          <div key={carrier.id}>
            <h3>{carrier.title}</h3>
            <span>Last application date: {carrier.date}</span>
            <p>{carrier.description}</p>
            <Button type="button">
              <Link to="/contact">Contact us</Link>
            </Button>
          </div>
        );
      })}
    </CarriersStyle>
  );
};

export default CarriersContainer;
