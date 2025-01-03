// components/Cart.js
import React from 'react';
import '../Cart/Cart.css'
const Cart = ({ cartItems }) => (
  <div className="cart">
    <h2>Cart Items</h2>
    {cartItems.length > 0 ? (
      cartItems.map(item => (
        <div key={item.id}>
          <span>{item.name}</span> - <span>${item.price}</span>
        </div>
      ))
    ) : (
      <p>Your cart is empty</p>
    )}
  </div>
);

export default Cart;
