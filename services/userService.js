const userModel = require('../models/user');

class UserService {
    async createUser(userData) {
        // Déterminer le profil en fonction de l'email
        const profil_id = userData.email.endsWith('@company.com') ? 1 : 2; 
        const newUserData = { ...userData, profil_id };
        return await userModel.createUser(newUserData);
    }

    async getAllUsers() {
        return await userModel.getAllUsers();
    }

    async getUserById(id) {
        return await userModel.getUserById(id);
    }

    async updateUser(id, userData) {
        return await userModel.updateUser(id, userData);
    }

    async deleteUser(id) {
        return await userModel.deleteUser(id);
    }
}

module.exports = new UserService();
