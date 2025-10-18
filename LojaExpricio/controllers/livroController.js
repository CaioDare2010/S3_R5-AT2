const {livroModel} = require("../models/livroModel");

const livroController ={
    /*---------------------------
    LISTAR TODOS OS LIVROS
    GET /produtos
    -----------------------------
    */
    listarLivros: async (req, res)=>{
        try {
            
            const livros = await livroModel.buscarTodos();

            res.status(200).json(livros)

        } catch (error) {
            console.error('Erro ao listar livros:', error);
            res.status(500).json({error: 'Erro ao buscar livros.'});
        }
    },

    /*---------------------------
    CRIAR UM NOVO LIVRO
    POST /livros
    {
        "nomeLivro": "nome" ,
        "idLivro": 00000 ,
        "precoLivro": 0.00
    }
    -----------------------------
    */
   criarLivro: async (req, res)=>{
    try{
       const {nomeLivro, idLivro, precoLivro} = req.body;

       if (nomeLivro == undefined || precoLivro == undefined || isNaN (precoProduto) || 
      idLivro == undefined || isNaN (idProduto)) {
            return res.status(400).json({erro: 'Campos Obrigatórios não preenchidos!'});
       }

       await livroModel.inserirLivro(nomeLivro, idLivro, precoLivro);

       res.status(201).status({message: 'Livro cadastrado com sucesso!'});

    }catch (error) {
        console.error('Erro ao cadastrar livro:', error);
        res.status(500).json({erro: 'Erro ao cadastrar livro.'});
    }
   }
}

module.exports = {livroController};