const User = require('../models/User');


module.exports = {
    async index(req, res) {
        const users = await User.findAll();
        return res.json(users)
    },

    async store(req, res) {
        const { id, name, email, phone, datebirth, indication, rg, catalog1,catalog2,catalog3,catalog4,catalog5,catalog6,catalog7,catalog8, pointsupport, cep, rua, numero, complemento, cidade, estado, bairro } = req.body;


        const user = await User.create({ id, name, email, phone, datebirth, indication, rg, catalog1,catalog2,catalog3,catalog4,catalog5,catalog6,catalog7,catalog8, pointsupport, cep, rua, numero, complemento, cidade, estado, bairro });

        return res.json(user);
    },
    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const [updated] = await User.update(req.body, {
                where: { id: id }
            });
            if (updated) {
                const updatedUser = await User.findOne({ where: { id: id } });
                return res.status(200).json({ post: updatedUser });
            }
            throw new Error('Post not found');
        } catch (error) {
            return res.status(500).send(error.message);
        }
    },
    async delete(req, res) {
        try {
            const { id } = req.params;
            const deleted = await User.destroy({
                where: { id: id }
            });
            return res.json({"Mensagem apagada":"Hoje"})
        } catch (error) {
            return res.status(500).send(error.message);
        }
    },
   async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
};