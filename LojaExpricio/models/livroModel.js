// Importar a conexão com o banco de dados e o tipo de dados SQL
const {sql, getConnection} = require("../config/db");

const livroModel = {
    buscarTodos: async ()=>{
        try {
            
            const pool = await getConnection();

            let querySQL = "SELECT * FROM Livros";

            const result = await pool.request().query(querySQL);

            return result.recordset;

        } catch (error) {
            console.error("Erro ao buscar Livros:", error);
            throw error;
        }
    },

    inserirLivros: async (nomeLivro, anoPublicacao, quantidadeLivro, idLivro)=>{
        try{
            
            const pool = await getConnection();

            let querySQL = 'INSERT INTO Livros (nomeLivro, idLivro, precoLivro) VALUES (@nomeLivro, idLivro, @precoLivro)';
             
            await pool.request()
                .input('nomeLivro', sql.VarChar(100),
                nomeLivro)
                input('anoPublicacao', sql.Decimal(10,2), 
                anoPublicacao)
                .input('quantidadeLivro', sql.Decimal(10,2), 
                quantidadeLivro)
                .input('idLivro', sql.Decimal(10,2), 
                idLivro)
                .query(querySQL);

        }catch (error) {
            console.error('Erro ao inserir livro:',error);
            throw error;
        }
    }
};

module.exports = { livroModel };