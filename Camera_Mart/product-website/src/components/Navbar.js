import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';


function Navbar({ cartItemsCount,wishlist ,user }) {
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

      <div className="navbar-actions">
        {/* <Link to="/login" className="login-button">Login</Link>  */}
        {user ? (
          <>
            <span>Welcome ${user.name}</span>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
      <Link to="/wishlist">
          <FaHeart size={24} />
          {wishlist.length > 0 && <span className="icon-badge">{wishlist.length}</span>}
        </Link>
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
