// controllers/userController.js
const userService = require('../application/userService');

class UserController {
    async getAllUsers(req, res) {
        try {
            const users = await userService.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getUserById(req, res) {
        try {
            const user = await userService.getUserById(req.params.id);
            if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createUser(req, res) {
        try {
            const user = await userService.createUser(req.body);
            res.status(201).json(user); // Retourner l'utilisateur créé
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updateUser(req, res) {
        try {
            const updated = await userService.updateUser(req.params.id, req.body);
            if (!updated) return res.status(404).json({ message: 'Utilisateur non trouvé' });
            res.json({ message: 'Utilisateur mis à jour avec succès' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteUser(req, res) {
        try {
            const deleted = await userService.deleteUser(req.params.id);
            if (!deleted) return res.status(404).json({ message: 'Utilisateur non trouvé' });
            res.json({ message: 'Utilisateur supprimé avec succès' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new UserController();
