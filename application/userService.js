// application/userService.js
const userRepository = require('../persistence/userRepository');

class UserService {
    async createUser(userData) {
        // Déterminer le profil_id basé sur l'email
        const profilId = userData.email.endsWith('@company.com') ? 1 : 2; // 1 pour Admin, 2 pour Standard
        const userWithProfile = { ...userData, profil_id: profilId };
        return await userRepository.createUser(userWithProfile); // Récupérer l'utilisateur avec le profil
    }

    async getAllUsers() {
        return await userRepository.getAllUsers();
    }

    async getUserById(userId) {
        return await userRepository.getUserById(userId);
    }

    async updateUser(userId, userData) {
        return await userRepository.updateUser(userId, userData);
    }

    async deleteUser(userId) {
        return await userRepository.deleteUser(userId);
    }
}

module.exports = new UserService();
