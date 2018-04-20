const router = require('express').Router()
module.exports = router

router.use('/users/2', require('./users'))
router.use('/products', require('./products'))
router.use('/reviews', require('./reviews'))
router.use('/orders', require('./orders'))
router.use('/categories', require('./categories'))

router.use((req, res, next) => {
  const err = new Error('API route not found')
  err.status = 404
  next(err)
})
