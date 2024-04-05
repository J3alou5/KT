
import { createContext } from "react";

const cartList = {
  cart: [],
};

const CartContext = createContext(cartList);

export default CartContext;