import React, { useReducer } from 'react';
import Header from './components/Header';
import Meals from './components/Meals';
import CartContext from './components/CartContext';

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
      const newState = existingItemIndex !== -1
        ? state.map((item, index) => index === existingItemIndex 
          ? { ...item, quantity: item.quantity + 1 } 
          : item)
        : [...state, { ...action.payload, quantity: 1 }];
      return newState;
    }
    case 'REMOVE_ITEM': {
      return state.reduce((acc, currentItem) => {
        if (currentItem.id === action.payload.id) {
          if (currentItem.quantity > 1) {
            return [...acc, { ...currentItem, quantity: currentItem.quantity - 1 }];
          }
          return acc;
        } else {
          return [...acc, currentItem];
        }
      }, []);
    }
    default:
      return state;
  }
};

const App = () => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addItemToCart = item => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItemFromCart = id => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  return (
    <CartContext.Provider value={{ cart, addItem: addItemToCart, removeItem: removeItemFromCart }}>
      <Header />
      <Meals />
    </CartContext.Provider>
  );
}

export default App;

