import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.scss';

class Checkout extends Component {
    render() {
        const addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (
                        <li key={item.id}>
                            {item.title}
                            {item.price}
                        </li>
                    )
                })
            ) :
            (
                <p>No items in cart</p>
            )
        return (
            <div className="checkout-container">
                <ul>
                    {addedItems}
                </ul>
            </div>
        )
    }
};

export default Checkout;
