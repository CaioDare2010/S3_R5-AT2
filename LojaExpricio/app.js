const express = require("express");
const app = express();
const {clienteRoutes,produtoRoutes} = require("./src/routes/clienteRoutes");

const PORT = 8081;

app.use(express.json());

// Rotas da aplicação
app.use('/', clienteRoutes, produtoRoutes);

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});