const { File } = require('../models')

module.exports = class fileControllers {
    static async getAllFile(req, res) {
        try {
            const files = await File.findAll()
            res.status(200).json(files)
        } catch (error) {
            res.status(500).json({ message : "Internal Server Error"})
        }
    }

    static async getFileById(req, res) {
        try {
            const file = await File.findByPk(req.params.id)
            if (!file) {
                return res.status(404).json({ message: 'File not found' })
            }
            res.status(200).json(file)
        } catch (error) {
            res.status(500).json({ message : "Internal Server Error"})
        }
    }

    
}