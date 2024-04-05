import React from 'react';
import Button from './UI/Button';
import logo from '../assets/logo.jpg';

const Header = () => {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="Logo" />
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <Button textOnly={true} children={'Cart (0)'}/>
            </nav>
        </header>
    );
};

export default Header; 
