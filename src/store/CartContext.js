import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    const updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const dispatch = { clearCart }; // Define dispatch object

  return (
    <CartContext.Provider value={{ cartItems, addItem, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;