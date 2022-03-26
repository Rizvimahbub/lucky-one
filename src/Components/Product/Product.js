import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../Shop/Shop'
import './Product.css';

const Product = ({product,handleAddToCart}) => {
    const {id,name,img,ratings,price} = product
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price : ${price}</p>
                <p className='product-ratings'>Ratings : {ratings} stars</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>Add To Cart
                <p><FontAwesomeIcon icon={faShoppingCart}
                ></FontAwesomeIcon></p></button>
        </div>
    );
};

export default Product;