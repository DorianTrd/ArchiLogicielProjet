// persistence/userRepository.js
const db = require('./db');

class UserRepository {
    async createUser(userData) {
        const [result] = await db.query('INSERT INTO utilisateurs SET ?', userData);
        const createdUser = { id: result.insertId, ...userData };
        
        // Récupérer le profil de l'utilisateur
        const [profile] = await db.query('SELECT nom AS profil FROM profils WHERE id = ?', [createdUser.profil_id]);
        
        return { ...createdUser, profil: profile[0].profil }; // Ajouter le profil à l'objet utilisateur
    }

    async getAllUsers() {
        const [users] = await db.query('SELECT u.id, u.nom, u.prenom, u.email, u.telephone, p.nom AS profil FROM utilisateurs u JOIN profils p ON u.profil_id = p.id');
        return users;
    }

    async getUserById(userId) {
        const [user] = await db.query('SELECT u.id, u.nom, u.prenom, u.email, u.telephone, p.nom AS profil FROM utilisateurs u JOIN profils p ON u.profil_id = p.id WHERE u.id = ?', [userId]);
        return user[0];
    }

    async updateUser(userId, userData) {
        await db.query('UPDATE utilisateurs SET ? WHERE id = ?', [userData, userId]);
        return await this.getUserById(userId);
    }

    async deleteUser(userId) {
        const result = await db.query('DELETE FROM utilisateurs WHERE id = ?', [userId]);
        return result.affectedRows > 0;
    }
}

module.exports = new UserRepository();
