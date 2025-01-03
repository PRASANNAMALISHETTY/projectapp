// App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import '../src/App.css'
const App = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 20, image: 'image1.jpg' },
    { id: 2, name: 'Product 2', price: 30, image: 'image2.jpg' },
    { id: 3, name: 'Product 3', price: 40, image: 'image3.jpg' },
  ]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = product => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="app">
      <Navbar cartCount={cartItems.length} />
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
