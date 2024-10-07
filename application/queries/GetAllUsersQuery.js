class GetAllUsersQuery {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute() {
        const users = await this.userRepository.getAllUsers();
        return users.map(user => ({
            nom: user.nom,
            prenom: user.prenom,
            email: user.email,
            telephone: user.telephone,
            profil: user.profil // Nom du profil (Administrateur ou Utilisateur Standard)
        }));
    }
}

module.exports = GetAllUsersQuery;
