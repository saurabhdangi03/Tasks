import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar({ cartItemsCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <Link to="/" className="logo-text">CameraMart</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="navbar-cart">
        <Link to="/cart">
          <FaShoppingCart size={24} />
          {/* Show the number of items in the cart */}
          {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
