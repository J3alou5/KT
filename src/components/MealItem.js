import React, { useContext } from 'react';
import { CartContext } from '../store/CartContext';

const MealItem = (props) => {
  const { addItem } = useContext(CartContext); 

  const handleClick = () => {
    addItem(props.meal); 
  };

  return (
    <li className="meal-item">
      <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name} />
  
        <div className="meal-item-description">
          <h3>{props.meal.name}</h3>
          <p>{props.meal.description}</p>
        </div>
        <div className="meal-item-actions">
          <p className="meal-item-price">${props.meal.price}</p>
          <button className="button" onClick={handleClick}>Add to Cart</button>
        </div>
     
    </li>
  );
}

export default MealItem;
