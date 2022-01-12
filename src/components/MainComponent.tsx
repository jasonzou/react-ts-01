import * as React from 'react';
import { useState } from 'react';
import { DISHES, DishType } from '../shared/dishes';
import {Button } from "react-bootstrap";
import Menu from './MenuComponent';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import { Card } from 'react-bootstrap'


const dishes = DISHES
const arrayOfObjects = [
  { coffee: "Americano", size: "Medium" },
  { coffee: "Espresso", size: "Single" },
];

const Main = () => {
   
  return (
      <div>
        <Header />
        {dishes.map(
          ({id, name, image }) => (
            <p>
          <div>{id}</div>
          <div>{name}</div>
          <img src={image} />
          </p>
        ))}
        <Button>Hello</Button>
        <Footer />
      </div>
    );
};

export default Main;