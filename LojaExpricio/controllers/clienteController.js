const {clienteModel} = require("../models/clienteModel");

const clienteController ={
    /*---------------------------
    LISTAR TODOS OS CLIENTES
    GET /cliente
    -----------------------------
    */
    listarClientes: async (req, res)=>{
        try {
            
            const clientes = await clienteModel.buscarTodos();

            res.status(200).json(clientes)

        } catch (error) {
            console.error('Erro ao listar cliente:', error);
            res.status(500).json({error: 'Erro ao buscar cliente.'});
        }
    },

    /*---------------------------
    CADASTRAR UM NOVO CLIENTE
    POST /cliente
    {
        "nomeCliente": "nome" ,
        "email": "nome@gmail.com"
        "telefone": +00 00 00000-0000
    }
    -----------------------------
    */
   criarCliente: async (req, res)=>{
    try{
       const {nomeCliente, email, telefone} = req.body;

       if (nomeCliente == undefined || email == undefined || telefone == undefined || isNaN(telefone)) {
            return res.status(400).json({erro: 'Campos Obrigatórios não preenchidos!'});
       };

       await clienteModel.inserirCliente(nomeCliente, email, telefone);

       res.status(201).status({message: 'Cliente cadastrado com sucesso!'});

    }catch (error) {
        console.error('Erro ao cadastrar cliente:', error);
        res.status(500).json({erro: 'Erro ao cadastrar cliente.'});
    }
   }
}

module.exports = {clienteController};