const express = require('express');
const router = express.Router();
const categoria = require("../controller/categoria");
const financa = require("../controller/financa")

// Rotas de Categoria
router.post('/criar/categoria', categoria.create);
router.get('/listar/categoria/:page', categoria.findAll);
router.put('/atualizar/categoria/:id', categoria.update);


// Rotas de Financas
router.post('/criar/financa', financa.create);
router.get('/listar/financa/:page', financa.findAll);
router.put('/atualizar/financa/:id', financa.update);
module.exports = router;


