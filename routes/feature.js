const express = require('express')
const router = express.Router()

const featureControllers = require('../controllers/featureControllers')

router.get('/', featureControllers.getAllFeature)
router.get('/:id', featureControllers.getFeatureById)
router.post('/:id', featureControllers.createFeature)
router.put('/:id', featureControllers.updateFeature)
router.delete('/:id', featureControllers.deleteFeature)

module.exports = router