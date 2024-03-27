const sequelize = require('sequelize');
const model = require('../models');
const categoria = model.Categoria;

module.exports = {
    async create(req, res) {
        try {
            const {
                descricao
            } = req.body

            const Categoria = await categoria.create({
                descricao
            });

            return res.json({ msg: "Categoria cadastrada com sucesso!! " });

        } catch (error) {
            return res.json({ msg: "Não foi possivel cadastrar a categoria " + error });

        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;

            const {
                descricao
            } = req.body

            const Categoria = await categoria.update({
                descricao

            }, { where: { id } });

            return res.json({ msg: "Categoria alterada com sucesso!! " });


        } catch (error) {
            return res.json({ msg: "Não foi possivel alterar a categoria " + error });
        }
    },

    async findAll(req, res) {
        try {
            const { page } = req.params;
            const limite = 5;

            const Categoria = await categoria.findAndCountAll({
                order: [
                    ['id', 'ASC']
                ],
                limit: limite,
                offset: parseInt(page)
            })

            return res.json(Categoria);

        } catch (error) {
            return res.json("Erro ao listar categorias " + error);
        }
    }

}