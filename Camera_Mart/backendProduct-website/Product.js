// models/Product.js
const mongoose = require('mongoose');

// Create a schema for the product
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

// Export the model
module.exports = mongoose.model('Product', ProductSchema);
