const db = require('../db/db');

class UserModel {
    async createUser(userData) {
        return new Promise((resolve, reject) => {
            const { nom, prenom, email, telephone, profil_id } = userData;
            db.query('INSERT INTO utilisateurs (nom, prenom, email, telephone, profil_id) VALUES (?, ?, ?, ?, ?)',
                [nom, prenom, email, telephone, profil_id],
                (error, results) => {
                    if (error) return reject(error);
                    resolve({ id: results.insertId, ...userData });
                }
            );
        });
    }

    async getAllUsers() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM utilisateurs', (error, results) => {
                if (error) return reject(error);
                resolve(results);
            });
        });
    }

    async getUserById(id) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM utilisateurs WHERE id = ?', [id], (error, results) => {
                if (error) return reject(error);
                resolve(results[0]);
            });
        });
    }

    async updateUser(id, userData) {
        return new Promise((resolve, reject) => {
            const { nom, prenom, email, telephone } = userData;
            db.query('UPDATE utilisateurs SET nom = ?, prenom = ?, email = ?, telephone = ? WHERE id = ?',
                [nom, prenom, email, telephone, id],
                (error, results) => {
                    if (error) return reject(error);
                    resolve(results.affectedRows > 0);
                }
            );
        });
    }

    async deleteUser(id) {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM utilisateurs WHERE id = ?', [id], (error, results) => {
                if (error) return reject(error);
                resolve(results.affectedRows > 0);
            });
        });
    }
}

module.exports = new UserModel();
