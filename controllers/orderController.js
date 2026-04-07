const Order = require('../models/Order')

// @desc    Place a new order
// @route   POST /api/orders
const placeOrder = async (req, res) => {
  try {
    const {
      firstName, lastName, email,
      address, city, zip,
      items, totalAmount
    } = req.body

    // Check if required fields are present
    if (!firstName || !lastName || !email || !address || !city || !zip) {
      return res.status(400).json({ message: 'Please fill all customer details' })
    }

    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'No items in order' })
    }

    // Create the order
    const order = await Order.create({
      firstName, lastName, email,
      address, city, zip,
      items, totalAmount
    })

    res.status(201).json({
      message: 'Order placed successfully',
      orderId: order._id,
      order
    })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @desc    Get all orders
// @route   GET /api/orders
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 })
    res.json({
      total: orders.length,
      orders
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { placeOrder, getOrders }