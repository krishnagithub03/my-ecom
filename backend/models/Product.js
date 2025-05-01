const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],
  price: { 
    type: Number, 
    required: true
 },
  category: { 
    type: String, 
    required: true 
  },
  brand: { 
    type: String 
  },
  stock: { 
    type: Number, 
    default: 0 
  },
  rating: { 
    type: Number, 
    default: 0 
  },
  numReviews: { 
    type: Number, 
    default: 0 
  },
},{timestamps : true});

module.exports = mongoose.model("Product", productSchema);