const { User } = require('../models')

module.exports = class userControllers {
    static async getAllUser(req, res) {
        try {
            const users = await User.findAll()
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json({ message : "Internal Server Error"})
        }
    }

    static async getUserById(req, res) {
        try {
            const user = await User.findByPk(req.params.id)
            if (!user) {
                return res.status(404).json({ message: 'User not found' })
            }
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({ message : "Internal Server Error"})
        }
    }

    static async createUser(req, res) {
        try {
            const user = await User.create(req.body)
            res.status(201).json(user)
        } catch (error) {
            res.status(500).json({ message : "Internal Server Error"})
        }
    }

    static async updateUser(req, res) {
        try {
            const user = await User.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({ message : "Internal Server Error"})
        }
    }

    static async deleteUser(req, res) {
        try {
            const user = await User.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({ message : "Internal Server Error"})
        }
    }
}