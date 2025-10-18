const express = require("express");
const router = express.Router();
const {livroController} = require("../controllers/livroController");

// GET /produtos -> Listar todos os produtos
router.get('/livro', livroController.listarLivros);

// POST /produtos -> Cria um novo produto
router.post('/livro', livroController.criarLivros);

module.exports = {livroRoutes: router};