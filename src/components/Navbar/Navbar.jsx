// components/Navbar.js
import React from 'react';
import '../Navbar/Navbar.css'
const Navbar = ({ cartCount }) => (
  <nav>
    <h1>E-Commerce</h1>
    <div>
      <span>Cart ({cartCount})</span>
    </div>
  </nav>
);

export default Navbar;
