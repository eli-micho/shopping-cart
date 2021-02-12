import React from 'react';
import ItemCard from './../../components/ItemCard';
import plantsObj from './../../plantsObj';
import './styles.scss';

const Shop = () => {
    return (
        <div className="shop">
            {plantsObj.map(x => {
                return <ItemCard plants={x} />
            })}
        </div>
    );
};

export default Shop;
