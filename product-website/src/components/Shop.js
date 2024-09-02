import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Shop.css';

function Shop({ products, addToCart }) {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/cart'); // Navigate to the Cart page after adding to cart
  };

  return (
    <div className="shop-container">
      <h1>Shop Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
