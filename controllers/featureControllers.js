const { Feature } = require('../models')

module.exports = class featureControllers {
    static async getAllFeature(req, res) {
        try {
            const features = await Feature.findAll()
            res.status(200).json(features)
        } catch (error) {
            res.status(500).json({ message : "Internal Server Error"})
        }
    }

    static async getFeatureById(req, res) {
        try {
            const feature = await Feature.findByPk(req.params.id)
            if (!feature) {
                return res.status(404).json({ message: 'Feature not found' })
            }
            res.status(200).json(feature)
        } catch (error) {
            res.status(500).json({ message : "Internal Server Error"})
        }
    }

    static async createFeature(req, res) {
        try {
            const motorID = req.params.id
            const featureData =  {
                motorID,
                ...req.body
            }
            const feature = await Feature.create(featureData)
            res.status(201).json(feature)
        } catch (error) {
            res.status(500).json({ message : "Internal Server Error"})
        }
    }

    static async updateFeature(req, res) {
        try {
            const feature = await Feature.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            if (!feature) {
                return res.status(404).json({ message: 'Feature not found' })
            }
            res.status(200).json(feature)
        } catch (error) {
            res.status(500).json({ message : "Internal Server Error"})
        }
    }

    static async deleteFeature(req, res) {
        try {
            const feature = await Feature.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json(feature)
        } catch (error) {
            res.status(500).json({ message : "Internal Server Error"})
        }
    }
}