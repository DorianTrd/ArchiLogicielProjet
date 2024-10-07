class GetUserByIdQuery {
    constructor(userRepository, id) {
        this.userRepository = userRepository;
        this.id = id;
    }

    async execute() {
        const user = await this.userRepository.getUserById(this.id);
        if (!user) {
            throw new Error('Utilisateur non trouvé');
        }
        return {
            nom: user.nom,
            prenom: user.prenom,
            email: user.email,
            telephone: user.telephone,
            profil: user.profil // Nom du profil
        };
    }
}

module.exports = GetUserByIdQuery;
