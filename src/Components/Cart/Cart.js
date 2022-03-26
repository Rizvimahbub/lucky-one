import React from 'react';
import './Cart.css';


const Cart = ({item}) => {
    const {name} = item;
    return (
        <div className='cart'>
            <div>
                <h1>{name}</h1>
            </div>   
        </div>
    );
};

export default Cart;