import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { addToCart } from './../../redux/actions/cartActions';
import ItemCard from './../../components/ItemCard';
import plantsObj from './../../plantsObj';
import './styles.scss';

const mapStateToProps = (state) => {
    return { items: state.items }
}

const mapDispatchToProps = (dispatch) => {
    return { addToCart: (id) => {dispatch(addToCart)}}
}

const Shop = (props) => {
    

    const handleClick = (id) => {
        props.addToCart(id);
    }

    return (
        <div className="shop">
            {plantsObj.map(x => {
                return <ItemCard plants={x} onClick={() => {handleClick(x.id)}} />
            })}
        </div>
    );
};



export default connect(mapStateToProps, mapDispatchToProps)(Shop);
