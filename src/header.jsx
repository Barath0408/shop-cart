import React from 'react';

const Header = ({ cartQuantity }) => {
  return (
    <header className="header">
      <h1>Shopping Cart</h1>
      <div className="cart-quantity">Cart: {cartQuantity}</div>
    </header>
  );
};

export default Header;
