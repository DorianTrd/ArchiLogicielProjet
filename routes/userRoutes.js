// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../presentation/userController');

// Route pour obtenir tous les utilisateurs
router.get('/', userController.getAllUsers);

// Route pour obtenir un utilisateur par ID
router.get('/:id', userController.getUserById);

// Route pour créer un utilisateur
router.post('/', userController.createUser);

// Route pour mettre à jour un utilisateur par ID
router.put('/:id', userController.updateUser);

// Route pour supprimer un utilisateur par ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
