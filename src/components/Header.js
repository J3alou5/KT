// Header.js
import React from 'react';
import logo from '../assets/logo.jpg'; // Adjust the import path to where your actual logo is stored

const Header = () => {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="Food Order App Logo"/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
                <button>Cart (0)</button>
            </nav>
        </header>
    );
};

export default Header;
