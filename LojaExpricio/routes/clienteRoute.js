const express = require("express");
const router = express.Router();
const {clienteController} = require("./controllers/clienteController");

// GET /produtos -> Listar todos os clientes
router.get('/clientes', clienteController.listarClientes);

// POST /produtos -> Cadastrar um novo cliente
router.post('/clientes', clienteController.criarCliente);

module.exports = {clienteRoutes: router};