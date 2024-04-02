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

// Listando todas pela página
router.get('/listar/financa/:page', financa.findAll);

// Listando por categoria_id
router.get('/pesquisar/financa/categoria_id/:id', financa.findById);

// Listar por data
router.get('/listar/financa/dataInicial/:dataInicial/dataFinal/:dataFinal/page/:page', financa.findAllDate);

// Atualizando
router.put('/atualizar/financa/:id', financa.update);

// Deleteando
router.delete('/deletar/financa/:id', financa.delete)
module.exports = router;


