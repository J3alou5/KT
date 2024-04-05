import { useContext } from 'react';
import Button from './UI/Button';
import CartContext from '../components/CartContext';

const MealItem = (props) => {
    const currencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR',
    });

     const { addItem, cart } = useContext(CartContext);

     const addToCartHandler = () => {
         addItem(props.meal);
         console.log("Cart contents after adding item:", [...cart, props.meal])
     };

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
                    <Button onClick={addToCartHandler} textOnly={false} children={'Add to Cart'}/>
                </p>
            </article>
        </li>
        
    )
}

export default MealItem;