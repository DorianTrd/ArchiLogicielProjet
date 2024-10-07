// dtos/userDTO.js

//NON FONCTIONNEL CAR PAS COONNECTE AUX AUTRE CAR MARCHE PAS LORS DE TESTS
class UserDTO {
    constructor({ nom, prenom, email, telephone, profil }) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.telephone = telephone;
        this.profil = profil;
    }

    validate() {
        const errors = [];

        if (!this.nom || typeof this.nom !== 'string') {
            errors.push('Nom est requis et doit être une chaîne de caractères.');
        }
        if (!this.prenom || typeof this.prenom !== 'string') {
            errors.push('Prénom est requis et doit être une chaîne de caractères.');
        }
        if (!this.email || !this.validateEmail(this.email)) {
            errors.push('Email est requis et doit être valide.');
        }
        if (!this.telephone || typeof this.telephone !== 'string') {
            errors.push('Numéro de téléphone est requis et doit être une chaîne de caractères.');
        }

        return errors; 
    }

    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
}

module.exports = UserDTO; 
