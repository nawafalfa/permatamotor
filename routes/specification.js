const express = require('express')
const router = express.Router()

const specificationControllers = require('../controllers/spesificationControllers')

router.get('/', specificationControllers.getAllSpecifications)
router.get('/:id', specificationControllers.getSpecificationsById)
router.post('/:id', specificationControllers.createSpecifications)
router.put('/:id', specificationControllers.updateSpecifications)
router.delete('/:id', specificationControllers.deleteSpecifications)

module.exports = router