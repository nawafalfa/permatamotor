const express = require('express')
const router = express.Router()

const variantColor = require('../controllers/variantColorControllers')

router.get('/', variantColor.getAllVariantColor)
router.get('/:id', variantColor.getVariantColorById)
router.post('/motors/:motorID/variants/:id', variantColor.createVariantColor);
router.put('/:id', variantColor.updateVariantColor)
router.delete('/:id', variantColor.deleteVariantColor)

module.exports = router