import React from 'react';
import ProductItem from './product item';

const ProductList = ({ products, cart, addToCart, removeFromCart }) => {
  return (
    <div>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          inCart={cart.some(item => item.id === product.id)}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
