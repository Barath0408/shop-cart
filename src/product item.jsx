import React from 'react';
import './productitem.css';
 


const ProductItem = ({ product, inCart, addToCart, removeFromCart }) => {
  return (
    <div className="product-item">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      {inCart ? (
        <button className="remove" onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
      ) : (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
};

export default ProductItem;
