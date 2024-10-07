// app.js
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

// Middleware pour le parsing du JSON
app.use(express.json());

// Utilisation des routes pour les utilisateurs avec le préfixe /api
app.use('/api/users', userRoutes);

// Lancer le serveur sur le port 3000
app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});
