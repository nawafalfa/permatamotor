const express = require('express')
const router = express.Router()

const fileControllers = require('../controllers/fileControllers')

router.get('/', fileControllers.getAllFile)
router.get('/:id', fileControllers.getFileById)
router.post('/:id', fileControllers.createFile)
router.put('/:id', fileControllers.updateFile)
router.delete('/:id', fileControllers.deleteFile)

module.exports = router