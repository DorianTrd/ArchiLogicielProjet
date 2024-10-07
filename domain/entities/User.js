class User {
    constructor(nom, prenom, email, telephone) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.telephone = telephone;
        this.profil = this.assignProfile(email);
    }

    assignProfile(email) {
        return email.endsWith('@company.com') ? 'Administrateur' : 'Utilisateur Standard';
    }
}

module.exports = User;
