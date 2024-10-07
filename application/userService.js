// services/userService.js
const db = require('../persistence/db');
const UserDTO = require('./dtos/userDTO');

class UserService {
    async getAllUsers() {
        const [rows] = await db.query(
            `SELECT u.nom, u.prenom, u.email, u.telephone, p.nom AS profil 
             FROM utilisateurs u 
             JOIN profils p ON u.profil_id = p.id`
        );
        return rows.map(user => new UserDTO(user)); // Convertir en UserDTO
    }

    async getUserById(id) {
        const [rows] = await db.query(
            `SELECT u.nom, u.prenom, u.email, u.telephone, p.nom AS profil 
             FROM utilisateurs u 
             JOIN profils p ON u.profil_id = p.id 
             WHERE u.id = ?`, 
            [id]
        );
        return rows.length ? new UserDTO(rows[0]) : null; // Convertir en UserDTO
    }

    async createUser(data) {
        const { nom, prenom, email, telephone } = data;
        const profilId = email.endsWith('@company.com') ? 1 : 2; // Déterminer le profil

        const [result] = await db.query(
            'INSERT INTO utilisateurs (nom, prenom, email, telephone, profil_id) VALUES (?, ?, ?, ?, ?)',
            [nom, prenom, email, telephone, profilId]
        );

        return {
            nom,
            prenom,
            email,
            telephone,
            profil: profilId === 1 ? 'Administrateur' : 'Utilisateur Standard'
        };
    }

    async updateUser(id, data) {
        const { nom, prenom, email, telephone } = data;
        const [result] = await db.query(
            'UPDATE utilisateurs SET nom = ?, prenom = ?, email = ?, telephone = ? WHERE id = ?',
            [nom, prenom, email, telephone, id]
        );
        return result.affectedRows > 0; // Retourne true si l'utilisateur a été mis à jour
    }

    async deleteUser(id) {
        const [result] = await db.query('DELETE FROM utilisateurs WHERE id = ?', [id]);
        return result.affectedRows > 0; // Retourne true si l'utilisateur a été supprimé
    }
}

module.exports = new UserService();
