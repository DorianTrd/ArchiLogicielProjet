class CreateUserCommand {
    constructor(userData) {
        this.nom = userData.nom;
        this.prenom = userData.prenom;
        this.email = userData.email;
        this.telephone = userData.telephone;
        this.profil_id = this.assignProfile(userData.email);
    }

    assignProfile(email) {
        return email.endsWith('@company.com') ? 1 : 2; // 1 = Admin, 2 = Utilisateur Standard
    }
}

module.exports = CreateUserCommand;
