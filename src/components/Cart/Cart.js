import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    //const total = cart.reduce((total, product) => total + product.salary, 0);
    let total = 0;
    for(let i = 0; i< cart.length; i++){
        const product = cart[i];
        total = total + product.salary;
    }


    const tax = (total / 10).toFixed(2);
    const grandTotal = (total - Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h3>Connection Users :</h3>
            <p>Added Users: {cart.length}</p>
            <p>Monthly Salary: $ {formatNumber(total)}</p>
            <p><small>Tax + vat: $ {tax}</small></p>
            <p>Total salary: $ {grandTotal}</p>
        </div>
    );
};

export default Cart;