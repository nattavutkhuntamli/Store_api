const router = require('express').Router()
const products = require('../controllers/products')

router.get('/', products.getAllProducts)
router.get('/static', products.getAllProductsStatic)

module.exports = router