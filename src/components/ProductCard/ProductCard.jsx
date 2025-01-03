// components/ProductCard.js
import React from 'react';
import '../ProductCard/ProductCard.css'
import product1 from '../../assests/scanner.png'
const ProductCard = ({ product, addToCart }) => (
  <div className="product-card">
    <img src={product1} alt={product.name} />
    <h2>{product.name}</h2>
    <p>${product.price}</p>
    <button onClick={() => addToCart(product)}>Add to Cart</button>
  </div>
);

export default ProductCard;
