const express = require('express')
const Router = express.Router()
const {getProduct, createProduct, getCategoryProduct, getSingleProduct, searchItems, getBrandList, getBrandProducts, getProductByName, getStoreProducts, deleteStoreItem} = require('../controller/ProductController')
Router.get('/products', getProduct)
Router.get('/product/:id', getSingleProduct)
Router.get('/products/:category', getCategoryProduct)
Router.get('/products/brand/:category', getBrandList)
Router.get('/products/category/:category/:brand', getBrandProducts)
Router.post('/products', createProduct)
Router.get('/products/search/items', searchItems)
Router.get('/products/name/:name', getProductByName)
Router.get('/store/:email', getStoreProducts)
Router.delete('/store/:email/:id', deleteStoreItem)
module.exports = Router