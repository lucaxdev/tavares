const Catalog = require('../models/Catalog');




module.exports = {
    async index(req, res) {
        const catalog = await Catalog.findAll();
        return res.json(catalog)
    },

    async store(req, res) {
        const { name } = req.body;


        const catalog = await Catalog.create({ name });

        return res.json(catalog);
    },
    async delete(req, res) {
        try {
            const { id } = req.params;
            const deleted = await Catalog.destroy({
                where: { id: id }
            });
            return res.json({"Mensagem apagada":"Hoje"})
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }
};