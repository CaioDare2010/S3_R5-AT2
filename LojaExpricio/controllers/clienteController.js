const {clienteModel} = require("../models/clienteModel");

const clienteController ={
    /*---------------------------
    LISTAR TODOS OS PRODUTOS
    GET /produtos
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
    CRIAR UM NOVO PRODUTO
    POST /produtos
    {
        "nomeCliente": "nome" ,
        "idCliente": 00000 ,
        "cpfCliente": 000.000.000.00
    }
    -----------------------------
    */
   criarCliente: async (req, res)=>{
    try{
       const {nomeCliente, idCliente, cpfCliente} = req.body;

       if (nomeCliente == undefined || idCliente == undefined || isNaN(idCliente) || cpfCliente == undefined || isNaN(cpfCliente)) {
            return res.status(400).json({erro: 'Campos Obrigatórios não preenchidos!'});
       };

       if (cpfCliente = await cpfCliente.buscarTodos()) return res.status(409).json({erro:'CPF já existente'});

       await clienteModel.inserirCliente(nomeCliente, idCliente, cpfCliente);

       res.status(201).status({message: 'Cliente cadastrado com sucesso!'});

    }catch (error) {
        console.error('Erro ao cadastrar cliente:', error);
        res.status(500).json({erro: 'Erro ao cadastrar cliente.'});
    }
   }
}

module.exports = {clienteController};