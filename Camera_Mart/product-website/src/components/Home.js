import React, { useState } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { FaHeart } from 'react-icons/fa';

const carouselImages = [
  '/images/products/product55.jpg',
  '/images/products/product4.jpg',
  '/images/products/product3.jpg'
];

function Home({ products, addToCart, addToWishlist,  isLoggedIn }) {
  const navigate = useNavigate();
  const [cartMessage, setCartMessage] = useState(''); // State for cart message
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleShopNow = () => {
    navigate('/shop');
  };

  // const handleAddToCart = (product) => {
  //   addToCart(product);
  //   navigate('/cart'); // Navigate to the Cart page after adding to cart
  // };

  // const isAuthenticated = !!localStorage.getItem('token');

  // const handleAddToCart = (product) => {
  //   if (isAuthenticated) {
  //     addToCart(product);
      
  //     // Navigate to cart page
  //   } else {
  //     navigate('/login'); // Redirect to login if not authenticated
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


  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,            // Enable autoplay
    autoplaySpeed: 2000,       // Slide every 3 seconds
    pauseOnHover: true,        // Pause sliding when hovering over the carousel
  };

  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="carousel-container">
          <Slider {...settings}>
            {carouselImages.map((image, index) => (
              <div key={index} className="carousel-slide">
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Slider>
          <div className="hero-text">
            <h1>Welcome to Camera Shop</h1>
            <p>Your one-stop shop for all your needs.</p>
            <button className="shop-now-btn" onClick={handleShopNow}>
              Shop Now
            </button>
          </div>
        </div>
      </header>

      <section className="featured-products">
        <h2>Popular Products</h2>
        {cartMessage && <div className="cart-message">{cartMessage}</div>}
        <div className="product-grid">
          {products.slice(0, 10).map((product) => (
            <div key={product.id} className="product-card"
              onMouseEnter={() => setHoveredProductId(product.id)}
              onMouseLeave={() => setHoveredProductId(null)} >
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
      </section>
    </div>
  );
}

export default Home;
