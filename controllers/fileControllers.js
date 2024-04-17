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

    static async createFile(req, res) {
        try {
            const motorID = req.params.id
            const fileData =  {
                motorID,
                ...req.body
            }
            const file = await File.create(fileData)
            res.status(201).json({ message: 'File created successfully', file: file })
        } catch (error) {
            res.status(500).json({ message : "Internal Server Error"})
        }
    }

    static async updateFile(req, res) {
        try {
            const file = await File.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            if (!file) {
                return res.status(404).json({ message: 'File not found' })
            }
            res.status(200).json({ message: 'File updated successfully', file: file })
        } catch (error) {
            res.status(500).json({ message : "Internal Server Error"})
        }
    }

    static async deleteFile(req, res) {
        try {
            const file = await File.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({ message: 'File deleted successfully', file: file })
        } catch (error) {
            res.status(500).json({ message : "Internal Server Error"})
        }
    }
}