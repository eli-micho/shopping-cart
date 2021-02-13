import React from 'react';

const ItemCard = (props) => {
    return(
        <div className="item-card">
            <img src={props.plants.imgpath} />
            <h1>{props.plants.name}</h1>
            <p className="price">{`${props.plants.price}`}</p>
            <p>Some text about plant</p>
            <p><button onClick={props.onClick}>Add to Cart</button></p>
        </div>
    )
};

export default ItemCard;
