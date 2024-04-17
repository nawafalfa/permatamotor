const express = require('express')
const router = express.Router()

const userControllers = require('../controllers/userControllers')

router.get('/', userControllers.getAllUser)
router.get('/:id', userControllers.getUserById)
router.post('/', userControllers.createUser)
router.put('/:id', userControllers.updateUser)
router.delete('/:id', userControllers.deleteUser)

module.exports = router