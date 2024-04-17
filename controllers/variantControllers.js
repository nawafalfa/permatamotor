const { Variant } = require('../models')

module.exports = class variantControllers {
    static async getAllVariant(req, res) {
        try {
            const variants = await Variant.findAll()
            res.status(200).json(variants)
        } catch (error) {
            res.status(500).json({ message : "Internal Server Error"})
        }
    }

    static async getVariantById(req, res) {
        try {
            const variant = await Variant.findByPk(req.params.id)
            if (!variant) {
                return res.status(404).json({ message: 'Variant not found' })
            }
            res.status(200).json(variant)
        } catch (error) {
            res.status(500).json({ message : "Internal Server Error"})
        }
    }

    static async createVariant(req, res) {
        try {
            const motorID = req.params.id
            const variantData =  {
                motorID,
                ...req.body
            }
            const variant = await Variant.create(variantData)
            res.status(201).json({ message: 'Variant created', variant: variant})
        } catch (error) {
            if (error.name === "SequelizeValidationError" || error.name === "SequelizeUniqueConstraintError") {
                return res.status(400).json({ message: error.errors[0].message })
            }
            res.status(500).json({ message : "Internal Server Error"})
        }
    }

    static async updateVariant(req, res) {
        try {
            const variant = await Variant.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            if (!variant) {
                return res.status(404).json({ message: 'Variant not found' })
            }
            res.status(200).json({ message: 'Variant updated', variant: variant})
        } catch (error) {
            res.status(500).json({ message : "Internal Server Error"})
        }
    }

    static async deleteVariant(req, res) {
        try {
            const variant = await Variant.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({ message: 'Variant deleted', variant: variant})
        } catch (error) {
            res.status(500).json({ message : "Internal Server Error"})
        }
    }
}