import React, { useContext, useState } from 'react';
import logo from '../assets/logo.jpg';
import Button from './UI/Button'; 
import { CartContext } from '../store/CartContext';
import Modal from './UI/Modal';

const Header = () => {
    const { cartItems, dispatch } = useContext(CartContext); 
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCartClick = () => {
        console.log('Cart clicked');
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        console.log("Modal closed!")
    };

    const handleCheckout = () => {
        dispatch.clearCart();
        setIsModalOpen(false);
        console.log('Checkout clicked');
    };

    return (
        <>
            <header id="main-header">
                <div id="title">
                    <img src={logo} alt="Logo" />
                    <h1>React Food Order App</h1>
                </div>
                <nav>
                    <Button textOnly onClick={handleCartClick}>Cart ({cartItems.length})</Button>
                </nav>
            </header>
            {isModalOpen && <Modal cartItems={cartItems} handleCloseModal={handleCloseModal} handleCheckout={handleCheckout} />}
        </>
    );
};

export default Header;
