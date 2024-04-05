import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    // Check if the item already exists
    const existingIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
    let updatedCartItems = [];
    if (existingIndex >= 0) {
      // If exists, update the quantity
      updatedCartItems = cartItems.map((cartItem, index) =>
        index === existingIndex ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
    } else {
      // If new, add the item with quantity=1
      updatedCartItems = [...cartItems, { ...item, quantity: 1 }];
    }
    setCartItems(updatedCartItems);
  };

  const removeItem = (itemId) => {
    // Filter out the item to remove
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};


export default CartContext;