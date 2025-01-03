// components/ProductCard.js
import React from 'react';
import '../ProductCard/ProductCard.css'
import product1 from '../../assests/scanner.png'
import { CiHeart } from "react-icons/ci";
const ProductCard = ({ product, addToCart }) => (
  <div className="product-card">
    <img src={product1} alt={product.name} />
    <h2>{product.name}</h2>
    <p>${product.price}</p>
    <button onClick={() => addToCart(product)}>Add to Cart</button>
    <button onClick={() => addToCart(product)}>Delete from Cart</button>
    <button className='Wishlist'> <CiHeart /></button>
  </div>
);

export default ProductCard;
