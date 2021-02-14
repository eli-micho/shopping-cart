import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCartItemsCount } from './../../redux/Cart/cart.selectors';
import './styles.scss';

const mapState = (state) => ({
    totalCartItems: selectCartItemsCount(state)
})

const Sidebar = (props) => {
    const dispatch = useDispatch();
    const { totalCartItems } = useSelector(mapState)

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
                    <span>Cart ({totalCartItems})</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
