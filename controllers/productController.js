const Product = require('../models/Product')

// @desc    Get all products
// @route   GET /api/products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.json({
      total: products.length,
      products
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @desc    Get single product
// @route   GET /api/products/:id
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    res.json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @desc    Search products
// @route   GET /api/products/search?q=
const searchProducts = async (req, res) => {
  try {
    const query = req.query.q

    const products = await Product.find({
      title: { $regex: query, $options: 'i' }
    })

    res.json({
      total: products.length,
      products
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// @desc    Get products by category
// @route   GET /api/products/category/:name
const getProductsByCategory = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.name })

    res.json({
      total: products.length,
      products
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getProducts,
  getProductById,
  searchProducts,
  getProductsByCategory
}