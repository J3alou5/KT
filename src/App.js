import React, { useReducer } from 'react';
import Header from './components/Header';
import Meals from './components/Meals';
import { CartProvider } from './store/CartContext';

const initialState = {
  cartItems: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += 1;
        return { ...state, cartItems: updatedCartItems };
      } else {
        return { ...state, cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }] };
      }
    case 'CLEAR_CART':
      return { ...state, cartItems: [] };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartProvider value={{ cartItems: state.cartItems, dispatch }}>
      <Header />
      <Meals />
    </CartProvider>
  );
};

export default App;
