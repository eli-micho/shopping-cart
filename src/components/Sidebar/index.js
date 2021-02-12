import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="title-container">
                <h1>Plants</h1>
            </div>

            <div className="cta-container">
                <ul>
                    <Link to="/">
                        <li>Home<span> &#62;</span></li>
                    </Link>
                    <Link to="/shop">
                        <li>Shop<span> &#62;</span></li>
                    </Link>
                </ul>
            </div>

            <div className="cart-container">
                <Link to="/checkout">
                    <span>Cart (0)</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
