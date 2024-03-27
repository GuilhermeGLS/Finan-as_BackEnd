const sequelize = require('sequelize');
const model = require("../models/");
const { response } = require('express');
const categoria = model.categoria;

const create = async (req, res) => {
    try {
        const decricao = req.body
        const Categoria = await categoria.create({
            decricao
        })

        return res.json({ msg: "Categoria cadastrar com Sucesso!" });
    } catch (error) {
        return res.json({ msg: "Não foi Possível cadastrar a categoria" + error });
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;

        const decricao = req.body

        const Categoria = await categoria.update({
            decricao

        }, { where: { id } });

        return res.json({ msg: "Categoria Alterada com Sucesso!" });

    } catch (error) {
        return res.json({ msg: "Não foi Possível alterar a categoria" + error });
    }
}

const findAll = async (req, res) => {
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

        return res.json(Categoria)
    } catch (error) {
        return res.json("erro ao listar categorias" + error)

    }
}


module.exports = {
    create,
    update,
    findAll
}