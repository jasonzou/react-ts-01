import * as React from 'react';
import { useState, Component } from 'react';
import { DISHES, DishType } from '../shared/dishes';
import {Button } from "react-bootstrap";
import Menu from './MenuComponent';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import { Card } from 'react-bootstrap'

interface MainProps {
  message: string
}

interface MainStates {
  dishes: Array<DishType>
  selectedDish: number
}

class Main extends Component<MainProps, MainStates>{
    state: MainStates = {
      dishes: DISHES,
      selectedDish: 0
    }
  onDishSelect(event: React.MouseEvent, dishId: number) {
    event.stopPropagation();
    const elem = event.currentTarget;
    console.log('hello')
    console.log(dishId)
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.dishes.map(
          ///({id, name, image }) => (
          (dish) => (
            <div>

          <Menu dish={dish} OnClick={(e: MouseEvent) => this.onDishSelect(e,dish.id)} />
            </div>
          
        ))}
        <Button>Hello</Button>
        <Footer />
      </div>
    );
  }
}

export default Main;