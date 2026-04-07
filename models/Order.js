const mongoose = require('mongoose')

const orderItemSchema = new mongoose.Schema({
  productId:  { type: String, required: true },
  title:      { type: String, required: true },
  price:      { type: Number, required: true },
  quantity:   { type: Number, required: true },
  thumbnail:  { type: String }
})

const orderSchema = new mongoose.Schema({
  // Customer details
  firstName:  { type: String, required: true },
  lastName:   { type: String, required: true },
  email:      { type: String, required: true },
  address:    { type: String, required: true },
  city:       { type: String, required: true },
  zip:        { type: String, required: true },

  // Cart items
  items:      [orderItemSchema],

  // Order summary
  totalAmount: { type: Number, required: true },
  status:      { type: String, default: 'placed' }

}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema)