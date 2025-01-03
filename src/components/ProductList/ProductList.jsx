// components/ProductList.js
import React from 'react';
import ProductCard from '../ProductCard/ProductCard'
import '../ProductList/ProductList.css'
const ProductList = ({ products, addToCart }) => (
  <div className="product-list">
    {products.map(product => (
      <ProductCard key={product.id} product={product} addToCart={addToCart} />
    ))}
  </div>
);

export default ProductList;
