const {emprestimoModel} = require("../models/emprestimoModel");

const emprestimoController ={
    /*---------------------------
    LISTAR TODOS OS EMPRESTIMO
    GET /emprestimo
    -----------------------------
    */
    listarEmprestimo: async (req, res)=>{
        try {
            
            const emprestimos = await emprestimoModel.buscarTodos();

            res.status(200).json(emprestimos)

        } catch (error) {
            console.error('Erro ao listar emprestimos:', error);
            res.status(500).json({error: 'Erro ao buscar emprestimos.'});
        }
    },

    /*---------------------------
    CRIAR UM NOVO EMPRESTIMOS
    POST /emprestimos
    {
        "dataEmprestimo": 0000/00/00 ,
        "idEmprestimo": 00000 ,
        "dataDevolucao": 0000/00/00,
        "idLivro": 00000,
        "idCliente": 0000
    }
    -----------------------------
    */
   criarEmprestimo: async (req, res)=>{
    try{
       const {dataEmprestimo, idEmprestimo, dataDevolucao, idLivro, idCliente} = req.body;

       if (dataEmprestimo == undefined ||isNaN (dataEmprestimo) || idEmprestimo == undefined ||
        isNaN (idEmprestimo) ||dataDevolucao == undefined || isNaN (dataDevolucao) ||
         idLivro == undefined || isNaN (idProduto) || idCliente == undefined || isNaN (idCliente)) {
            return res.status(400).json({erro: 'Campos Obrigatórios não preenchidos!'});
       }

       await emprestimoModel.inserirEmprestimo(dataEmprestimo, idEmprestimo,dataDevolucao, idLivro, idCliente);

       res.status(201).status({message: 'Emprestimo cadastrado com sucesso!'});

    }catch (error) {
        console.error('Erro ao cadastrar emprestimo:', error);
        res.status(500).json({erro: 'Erro ao cadastrar emprestimo.'});
    }
   }
}

module.exports = {emprestimoController};