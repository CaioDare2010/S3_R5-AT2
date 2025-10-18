const express = require("express");
const router = express.Router();
const {autorController} = require("./controllers/autorController");

// GET /produtos -> Listar todos os autores
router.get('/autores', autorController.listarAutores);

// POST /produtos -> Cadastrar um novo autor
router.post('/autores', autorController.criarAutor);

module.exports = {autorRoutes: router};