const mongoose = require('mongoose');

// Define schema for student documents
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  class: { type: String, required: true }
});

// Create a model based on the schema
const Student = mongoose.model('Student', studentSchema);

// Export the model
module.exports = Student;