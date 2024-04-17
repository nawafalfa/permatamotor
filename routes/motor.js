const express = require('express')
const router = express.Router()

const motorControllers = require('../controllers/motorControllers')

router.get('/', motorControllers.getAllMotor)
router.get('/:id', motorControllers.getMotorById)
router.post('/', motorControllers.createMotor)
router.put('/:id', motorControllers.updateMotor)
router.delete('/:id', motorControllers.deleteMotor)

module.exports = router