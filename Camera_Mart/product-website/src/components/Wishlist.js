import React from 'react';

import './Wishlist.css';

function Wishlist({ wishlist, removeFromWishlist }) {
  return (
    <div className="wishlist-container">
      <h2>Your Wishlist</h2>
      <div className="wishlist-grid">
        {wishlist.length > 0 ? (
          wishlist.map((product) => (
            <div key={product.id} className="wishlist-card">
              <img src={product.image} alt={product.name} />
              <div className="wishlist-card-content">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button onClick={() => removeFromWishlist(product.id)}>Remove</button>
              </div>
            </div>
          ))
        ) : (
          <p>Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
