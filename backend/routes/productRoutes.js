import express from 'express'
import asyncHandler from 'express-async-handler'
const route = express.Router()
import Product from '../models/productModel.js'

//@desc     Fetch All Products
//@route    GET /api/products
//@access   Public
route.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

//@desc     Fetch Single Product
//@route    GET /api/products/:id
//@access   Public
route.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error('Product Not Found')
    }
  })
)

export default route
