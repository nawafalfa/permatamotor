const express = require('express')
const router = express.Router()

const user = require('./user')
const feature = require('./feature')
const motor = require('./motor')
const spesification = require('./specification')
const variant = require('./variant')
const variantColor = require('./variantColor')

router.use('/user', user)
router.use('/feature', feature)
router.use('/motor', motor)
router.use('/specification', spesification)
router.use('/variant', variant)
router.use('/variantColor', variantColor)

module.exports = router