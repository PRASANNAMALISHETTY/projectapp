import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import '../Navbar/Navbar.css';
import icon from '../../assests/logo.jpeg'
const Navbar = ({ cartCount }) => (
  <nav className="navbar">
    <h1 className="navbar-logo">E-Commerce</h1>
    <img src={icon} alt="" />
    <ul className="navbar-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contacts">Contacts</a></li>
      <li><a href="#login">Login</a></li>
    </ul>
    <div className="navbar-cart">
      <FaShoppingCart className="cart-icon" />
      <span className="cart-count">{cartCount}</span>
    </div>
  </nav>
);

export default Navbar;
