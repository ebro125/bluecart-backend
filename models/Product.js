const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  title:            { type: String, required: true },
  description:      { type: String },
  price:            { type: Number, required: true },
  discountPercentage: { type: Number },
  rating:           { type: Number },
  stock:            { type: Number },
  brand:            { type: String },
  category:         { type: String },
  thumbnail:        { type: String },
  images:           [String],
}, { timestamps: true })

module.exports = mongoose.model('Product', productSchema)