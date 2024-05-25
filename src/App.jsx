import React, { useState } from 'react';
import ProductList   from './productlist';
import Cart from './cart';  

const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Apple', description: 'Fresh red apple' },
    { id: 2, name: 'Banana', description: 'Ripe yellow banana' },
    { id: 3, name: 'Carrot', description: 'Organic carrot' },
    { id: 4, name: 'Dates', description: 'Sweet dates' },
    { id: 5, name: 'Eggplant', description: 'Purple eggplant' },
    { id: 6, name: 'Fig', description: 'Fresh fig' },
    { id: 7, name: 'Grapes', description: 'Green grapes' },
    { id: 8, name: 'Honeydew', description: 'Sweet honeydew melon' },
    { id: 9, name: 'Iceberg Lettuce', description: 'Crisp iceberg lettuce' },
    { id: 10, name: 'Jackfruit', description: 'Tropical jackfruit' }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div className="App">
      <h1>Supermarket Daily Products</h1>
      <Cart cart={cart} />
      <ProductList products={products} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
