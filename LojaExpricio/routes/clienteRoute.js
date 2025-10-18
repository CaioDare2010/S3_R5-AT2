const express = require("express");
const router = express.Router();
const {clienteController} = require("./controllers/clienteController");

// GET /produtos -> Listar todos os produtos
router.get('/clientes', clienteController.listarClientes);

// POST /produtos -> Cria um novo produto
router.post('/clientes', clienteController.criarCliente);

module.exports = {clienteRoutes: router};