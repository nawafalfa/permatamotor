const { Specifications } = require('../models')
const { Motor } = require('../models')

module.exports = class spesificationControllers {
    static async getAllSpecifications(req, res) {
        try {
            const specifications = await Specifications.findAll()
            res.status(200).json(specifications)
        } catch (error) {
            res.status(500).json({ message : "Internal Server Error"})
        }
    }

    static async getSpecificationsById(req, res) {
        try {
            const specification = await Specifications.findByPk(req.params.id)
            if (!specification) {
                return res.status(404).json({ message: 'Specification not found' })
            }
            res.status(200).json(specification)
        } catch (error) {
            res.status(500).json({ message : "Internal Server Error"})
        }
    }

    static async createSpecifications(req, res) {
        try {
            const motorID = req.params.id
            const specData =  {
                motorID,
                ...req.body
            }
            const specification = await Specifications.create(specData)
            res.status(201).json(specification)
        } catch (error) {
            res.status(500).json({ message : "Internal Server Error"})
        }
    }

    static async updateSpecifications(req, res) {
        try {
            const specification = await Specifications.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            if (!specification) {
                return res.status(404).json({ message: 'Specification not found' })
            }
            res.status(200).json(specification)
        } catch (error) {
            res.status(500).json({ message : "Internal Server Error"})
        }
    }

    static async deleteSpecifications(req, res) {
        try {
            const specification = await Specifications.destroy({
                where: {
                    id: req.params.id
                }
            })
            if (!specification) {
                return res.status(404).json({ message: 'Specification not found' })
            }
            res.status(200).json(specification)
        } catch (error) {
            res.status(500).json({ message : "Internal Server Error"})
        }
    }
}