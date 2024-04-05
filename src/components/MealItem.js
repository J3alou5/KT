import React, { useContext, useEffect } from 'react';
import Button from './UI/Button';
import CartContext from '../store/CartContext';

const MealItem = (props) => {
    const currencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR',
    });

    const { addItemToCart, cart } = useContext(CartContext);

    const addToCartHandler = () => {
        addItemToCart(props.meal);
    };

    useEffect(() => {
        console.log("Cart contents after adding item:", cart);
    }, [cart]);

    return (
        <li className="meal-item">
            <article>
                <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name}/>
                <div>
                    <h3>{props.meal.name}</h3>
                    <p className="meal-item-price">{currencyFormat.format(props.meal.price)}</p>
                    <p className="meal-item-description">{props.meal.description}</p>
                </div>
                <p className="meal-item-actions"> 
                    <Button textOnly={false} onClick={addToCartHandler}>Add to Cart</Button>
                </p>
            </article>
        </li>
    )
}

export default MealItem;