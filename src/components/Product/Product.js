import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    console.log(props);
    const {img, name, seller, price, stock} = props.name
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-details">
                <h4>{name}</h4>
                <br/>
                <p>By: {seller} </p>
                <br/>
                <p>$ {price}</p>
                <p>Only {stock} Left in stock - Order soon</p>
                <button className="main-btn" onClick={() => props.button(props.name)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;