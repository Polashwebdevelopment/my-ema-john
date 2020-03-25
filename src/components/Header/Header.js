import React from 'react';
import logo from '../../images/logo1.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/suggestion">Suggestions</a>
                <a href="/connected">Connected</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;