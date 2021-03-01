import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props.cart);
    const cart = props.cart;
    const total = cart.reduce((total,product) => total+product.price , 0);
    let shipping = 0;
    if(total > 0 && total < 30){
        shipping = 12.20
    }else if(total > 30 && total < 300){
        shipping = 4.99
    }else if(total > 300 && shipping < 1000){
        shipping = 50.00
    }
    
    const tax = total* 10 / 100
    return (
        <div className="cart-container">
            <h3>Order Summery</h3>
            <p>Item Ordered: {cart.length}</p>
            <p>Shipping and Handling: {shipping}</p>
            <p>Total Before Tax: {total.toFixed(2)}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Total with Tax: {(total + tax).toFixed(2)}</p>
            <h3>Estimated Total: {(total + tax + shipping).toFixed(2)}</h3>
        </div>
    );
};

export default Cart;