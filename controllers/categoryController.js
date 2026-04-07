const Product = require('../models/Product')

// @desc    Get all unique categories
// @route   GET /api/categories
const getCategories = async (req, res) => {
  try {
    const categories = await Product.distinct('category')
    res.json({
      total: categories.length,
      categories
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { getCategories }