const express = require('express')
const router = express.Router()
const {
  getProducts,
  getProductById,
  searchProducts,
  getProductsByCategory
} = require('../controllers/productController')

router.get('/', getProducts)
router.get('/search', searchProducts)
router.get('/category/:name', getProductsByCategory)
router.get('/:id', getProductById)

module.exports = router