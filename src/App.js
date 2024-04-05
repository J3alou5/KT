import React, { useState } from 'react';
import Header from './components/Header';
import Meals from './components/Meals';
import CartContext from './components/CartContext';

const App = () => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart(prevCart => [...prevCart, item]);
  };


  const removeItem = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      <Header />
      <Meals />
    </CartContext.Provider>
  );
}

export default App;

