// routes/cart.js
const express = require('express');
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Add product to cart
router.post('/add-to-cart', authMiddleware, async (req, res) => {
  try {
    const { productId } = req.body;
    const user = await User.findById(req.user.id);
    user.cart.push(productId);
    await user.save();
    res.status(200).send('Product added to cart');
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
