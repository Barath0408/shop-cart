import React from 'react';
import './cart.css';

const Cart = ({ cart }) => {
  return (
    <div className="cart-container">
      <h2 className="cart-title">Cart</h2>
      <p>Items in cart: {cart.length}</p>
      <ul className="cart-item-list">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
