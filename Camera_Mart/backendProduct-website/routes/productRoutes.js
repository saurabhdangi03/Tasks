const express = require('express');
const router = express.Router();
const Product = require('../Product'); // Import Product model

// POST /api/products - Add a new product
router.post('/add', async (req, res) => {
  const { name, price, description, imageUrl } = req.body;

  // Validation: Ensure all required fields are filled
  if (!name || !price || !description || !imageUrl) {
    return res.status(400).json({ msg: 'Please fill in all fields' });
  }

  try {
    const newProduct = new Product({
      name,
      price,
      description,
      imageUrl,
    });

    await newProduct.save();
    res.status(201).json({ msg: 'Product added successfully!' });
  } catch (error) {
    console.error('Error saving product to database:', error);
    res.status(500).json({ msg: 'Server error' });
  }
});

// GET /api/products - Retrieve all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products from database:', error);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
