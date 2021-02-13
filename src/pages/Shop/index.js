import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { addProduct } from './../../redux/Cart/cart.actions';
import ItemCard from './../../components/ItemCard';
import plantsObj from './../../plantsObj';
import './styles.scss';

const Shop = (props) => {
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        if(!product) return;
        dispatch(
            addProduct(product)
        )
    }

    return (
        <div className="shop">
            {plantsObj.map(x => {
                return <ItemCard plants={x} onClick={() => {handleAddToCart(x)}} />
            })}
        </div>
    );
};



export default Shop;
