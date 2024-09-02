import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">CameraMart</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="navbar-cart">
        <Link to="/cart">
          <FaShoppingCart />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
