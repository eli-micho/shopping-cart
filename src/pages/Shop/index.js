import React from 'react';
import plantsObj from './../../plantsObj';
import './styles.scss';

const Shop = () => {
    return (
        <div className="shop">
            <div className="item-card">
                <img src={plantsObj[0].imgpath} />
                <h1>Air Plant</h1>
                <p className="price">$23.99</p>
                <p>Some text about plant</p>
                <p><button>Add to Cart</button></p>
            </div>
        </div>
    );
};

export default Shop;
