const { VariantColor } = require('../models')

module.exports = class variantColorControllers {
    static async getAllVariantColor(req, res) {
        try {
            const variantColors = await VariantColor.findAll()
            res.status(200).json(variantColors)
        } catch (error) {
            res.status(500).json({ message : "Internal Server Error"})
        }
    }

    static async getVariantColorById(req, res) {
        try {
            const variantColor = await VariantColor.findByPk(req.params.id)
            if (!variantColor) {
                return res.status(404).json({ message: 'Variant Color not found' })
            }
            res.status(200).json(variantColor)
        } catch (error) {
            res.status(500).json({ message : "Internal Server Error"})
        }
    }

    static async createVariantColor(req, res) {
        try {
            const variantID = req.params.id
            const motorID = req.params.motorID
            const variantColorData =  {
                motorID,
                variantID,
                ...req.body
            }
            const variantColor = await VariantColor.create(variantColorData)
            res.status(201).json({ message: 'Variant Color created', variantColor: variantColor})
        } catch (error) {
            res.status(500).json({ message : "Internal Server Error"})
        }
    }

    static async updateVariantColor(req, res) {
        try {
            const variantColor = await VariantColor.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            if (!variantColor) {
                return res.status(404).json({ message: 'Variant Color not found' })
            }
            res.status(200).json({ message: 'Variant Color updated', variantColor: variantColor})
        } catch (error) {
            res.status(500).json({ message : "Internal Server Error"})
        }
    }

    static async deleteVariantColor(req, res) {
        try {
            const variantColor = await VariantColor.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({ message: 'Variant Color deleted', variantColor: variantColor})
        } catch (error) {
            res.status(500).json({ message : "Internal Server Error"})
        }
    }
}