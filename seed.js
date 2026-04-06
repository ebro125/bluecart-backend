const mongoose = require('mongoose')
const dotenv = require('dotenv')
const fetch = require('node-fetch')
const Product = require('./models/Product')

dotenv.config()

const seedProducts = async () => {
  try {
    // 1. Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB Connected')

    // 2. Fetch all products from dummyjson
    const response = await fetch('https://dummyjson.com/products?limit=194')
    const data = await response.json()
    const products = data.products

    console.log(`Fetched ${products.length} products from dummyjson`)

    // 3. Clear existing products (so we don't get duplicates if run again)
    await Product.deleteMany({})
    console.log('Cleared existing products')

    // 4. Insert all products into MongoDB
    await Product.insertMany(products)
    console.log('Products seeded successfully!')

    process.exit(0)

  } catch (error) {
    console.error('Seed error:', error.message)
    process.exit(1)
  }
}

seedProducts()