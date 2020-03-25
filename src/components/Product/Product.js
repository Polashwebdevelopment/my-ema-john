import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    //console.log(props);
    const { img, name, hoby, salary, yearly } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>Hoby: {hoby}</small></p>
                <p>Monthly Salary ${salary}</p>
                <p><small> Total Yearly Income {yearly}</small></p>
                <br />
                <button 
                    className="main-button"
                    onClick={() => props.handleAddProduct(props.product)}
                    >
                        <FontAwesomeIcon icon={faShoppingCart} />
                        add to cart</button>
            </div>

        </div>
    );
};

export default Product;