const express = require("express");
const router = express.Router();
const {emprestimoController} = require("./controllers/emprestimoController");

// GET /produtos -> Listar todos os emprestimos
router.get('/emprestimo', emprestimoController.listarEmprestimos);

// POST /produtos -> Cria um novo emprestimos
router.post('/autores', emprestimoController.criarEmprestimo);

module.exports = {emprestimoRoutes: router};