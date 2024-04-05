import React from 'react';

const Modal = ({ cartItems, handleCloseModal, handleCheckout }) => {
    const itemMap = new Map();
    cartItems.forEach(item => {
        if (itemMap.has(item.id)) {
            itemMap.set(item.id, itemMap.get(item.id) + 1);
        } else {
            itemMap.set(item.id, 1);
        }
    });

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + (parseFloat(item.price) * itemMap.get(item.id)), 0);
    const formattedPrice = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(totalPrice);

    return (
        <dialog className="modal" style={{ display: 'block' }}>
            <h2>Your cart</h2>
            <ul className="cart-items">
                {[...itemMap].map(([itemId, quantity]) => {
                    const item = cartItems.find(item => item.id === itemId);
                    return (
                        <li key={itemId}>
                            <span>{item.name}</span>
                            <span> - </span>
                            <span>{quantity}</span>
                        </li>
                    );
                })}
            </ul>
            <p className="cart-total">{formattedPrice}</p>
            <p className="modal-actions">
                <button className="text-button" onClick={handleCloseModal}>Close</button>
                <button className="text-button" onClick={handleCheckout}>Checkout</button>
            </p>
        </dialog>
    );
}

export default Modal;
