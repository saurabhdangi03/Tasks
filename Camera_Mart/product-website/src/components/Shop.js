import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Shop.css';
import { FaHeart } from 'react-icons/fa';

function Shop({ products, addToCart, addToWishlist , isLoggedIn }) {
  const navigate = useNavigate(); // Initialize useNavigate
  const [cartMessage, setCartMessage] = useState(''); // State for cart message
  const [hoveredProductId, setHoveredProductId] = useState(null);


  // const handleAddToCart = (product) => {
  //   addToCart(product);
  //   navigate('/cart'); // Navigate to the Cart page after adding to cart
  // };

  // Check if the user is authenticated



// const handleAddToCart = (product) => {
//   const user = JSON.parse(localStorage.getItem('user'));
    
//   if (user) {
//     addToCart(product);
//     setCartMessage(`${product.name} has been added to your cart!`);

//     // Navigate to the Cart page after 2 seconds
//     setTimeout(() => {
//       setCartMessage('');
//       navigate('/cart');
//     },1000);
//     // Navigate to cart page
//   } else {
//     alert("Please login to add products to the cart.");
//     navigate('/login');
//   }
// };


const handleAddToCart = (product) => {
  if (isLoggedIn) {
    addToCart(product); // Add product to cart if logged in
    setCartMessage(`${product.name} has been added to your cart!`);

    // Navigate to the Cart page after 2 seconds
    setTimeout(() => {
      setCartMessage('');
      navigate('/cart');
    },1000);
    navigate('/cart');  // Navigate to the Cart page after adding to cart
  } else {
    navigate('/login'); // Redirect to login if not logged in
  }
};


const handleAddToWishlist = (product) => {
  if (isLoggedIn) {
    addToWishlist(product); // Add product to cart if logged in
    setCartMessage(`${product.name} has been added to your Wishlist!`);

    // Navigate to the Cart page after 2 seconds
    setTimeout(() => {
      setCartMessage('');
      navigate('/wishlist');
    },1000);
    navigate('/wishlist');  // Navigate to the Cart page after adding to cart
  } else {
  navigate('/login'); // Navigate to the Wishlist page after adding to wishlist
  }
};

  return (
    <div className="shop-container">
      <h1>Shop Our Products</h1>
      {cartMessage && <div className="cart-message">{cartMessage}</div>}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card"
          onMouseEnter={() => setHoveredProductId(product.id)}
          onMouseLeave={() => setHoveredProductId(null)}
          >
            <img src={product.image} alt={product.name} />
            {hoveredProductId === product.id && (
              <div className="wishlist-icon" onClick={() => handleAddToWishlist(product)}>
                <FaHeart size={24} />
              </div>
            )}

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
