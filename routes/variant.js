const express = require('express')
const router = express.Router()

const variantControllers = require('../controllers/variantControllers')

router.get('/', variantControllers.getAllVariant)
router.get('/:id', variantControllers.getVariantById)
router.post('/:id', variantControllers.createVariant)
router.put('/:id', variantControllers.updateVariant)
router.delete('/:id', variantControllers.deleteVariant)