import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(() =>{
        fetch('fake.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])

    

    const handleAddToCart = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart);

    }

    const randomSelectItem = () =>{
        const random = cart[Math.floor(Math.random() * cart.length)];
        setCart([random]);
    }

    const removeItem = () =>{
        setCart([]);
    }

    

    return (
        <div className='shop'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                    product={product}
                    handleAddToCart={handleAddToCart}
                    key={product.id}></Product>)
                }
            </div>
            <div className='cart-container'>
                <h1>Selected Watches</h1>
                {
                    cart.map(item => <Cart 
                    item={item}
                    key={item.id}></Cart>)
                }
                <button onClick={randomSelectItem} className='btn-1'>CHOOSE 1 FOR ME</button><br/><br/>
                <button onClick={removeItem} className='btn-2'>CHOOSE AGAIN</button>

            </div>
        </div>
    );
};

export default Shop;