const express = require("express");
const app = express();
const {clienteRoutes} = require("./src/routes/clienteRoutes");
const {livroRoutes} = require("./src/routes/livroRoutes");
const {autorRoutes} = require("./src/routes/autorRoutes");
const {emprestimoRoutes} = require("./src/routes/emprestimoRoutes");

const PORT = 8081;

app.use(express.json());

// Rotas da aplicação
app.use('/', clienteRoutes, livroRoutes, autorRoutes, emprestimoRoutes);

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});