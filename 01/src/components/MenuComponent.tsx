import * as React from 'react';
import { Card } from 'react-bootstrap'
import { DishType } from '../shared/dishes';

interface DishProps {
  dish: DishType,
}

const RenderMenuItem: React.FunctionComponent<DishProps> = ({ dish }):JSX.Element => {
 return (
 <Card>
    <Card.Img width="100%" src={dish.image} alt={dish.name} />
    <Card.ImgOverlay>
      <Card.Title>{dish.name}</Card.Title>
    </Card.ImgOverlay>
  </Card>
 )
};

const Menu: React.FunctionComponent<DishProps> = ({ dish }):JSX.Element => {
  return (
      <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1"  key={dish.id}>
              <RenderMenuItem dish = {dish} />
            </div>
          </div>
      </div>
  );
};

export default Menu;
