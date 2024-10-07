// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '',
    database: 'gestion_utilisateurs'
});

connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion :', err);
        return;
    }
    console.log('Connecté à la base de données MySQL');
});

module.exports = connection;
