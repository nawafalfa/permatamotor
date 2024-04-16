const { Motor } = require('../models')

module.exports = class motorControllers {
    static async getAllMotor(req, res) {
        try {
            const motors = await Motor.findAll()
            res.status(200).json(motors)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async getMotorById(req, res) {
        try {
            const motor = await Motor.findByPk(req.params.id)
            if (!motor) {
                return res.status(404).json({ message: 'Motor not found' })
            }
            res.status(200).json(motor)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async createMotor(req, res) {
        try {
            const motor = await Motor.create(req.body)
            res.status(201).json(motor)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async updateMotor(req, res) {
        try {
            const motor = await Motor.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json(motor)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async deleteMotor(req, res) {
        try {
            const motor = await Motor.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json(motor)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}