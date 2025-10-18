const {autorModel} = require("../models/autorModel");

const autorController ={
    /*---------------------------
    LISTAR TODOS OS AUTORES
    GET /autores
    -----------------------------
    */
    listarAutores: async (req, res)=>{
        try {
            
            const autores = await autorModel.buscarTodos();

            res.status(200).json(autor)

        } catch (error) {
            console.error('Erro ao listar autor:', error);
            res.status(500).json({error: 'Erro ao buscar autor.'});
        }
    },

    /*---------------------------
    CRIAR UM NOVO AUTOR
    POST /autor
    {
        "nomeAutor": "nome" ,
        "nacionalidade": "nacionalidade" ,
        "idade": 00
    }
    -----------------------------
    */
   criarAutor: async (req, res)=>{
    try{
       const {nomeAutor, nacionalidade, idade} = req.body;

       if (nomeAutor == undefined || nacionalidade == undefined ||idade == undefined || isNaN (idProduto)) {
            return res.status(400).json({erro: 'Campos Obrigatórios não preenchidos!'});
       }

       await autorModel.inserirLivro(nomeAutor, nacionalidade, idade);

       res.status(201).status({message: 'Autor cadastrado com sucesso!'});

    }catch (error) {
        console.error('Erro ao cadastrar autor:', error);
        res.status(500).json({erro: 'Erro ao cadastrar autor.'});
    }
   }
}

module.exports = {autorController};