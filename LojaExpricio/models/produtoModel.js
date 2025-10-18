// Importar a conexão com o banco de dados e o tipo de dados SQL
const {sql, getConnection} = require("../config/db");

const produtoModel = {
    buscarTodos: async ()=>{
        try {
            
            const pool = await getConnection();

            let querySQL = "SELECT * FROM Produtos";

            const result = await pool.request().query(querySQL);

            return result.recordset;

        } catch (error) {
            console.error("Erro ao buscar Produtos:", error);
            throw error;
        }
    },

    inserirProdutos: async (nomeProduto, precoProduto)=>{
        try{
            
            const pool = await getConnection();

            let querySQL = 'INSERT INTO Produto (nomeProduto, precoProduto) VALUES (@nomeProduto, @precoProduto)';
             
            await pool.request()
                .input('nomeProduto', sql.VarChar(100),
                nomeProduto)
                .input('precoProduto', sql.Decimal(10,2), 
                precoProduto)
                .query(querySQL);

        }catch (error) {
            console.error('Erro ao inserir produto:',error);
            throw error;
        }
    }
};

module.exports = { produtoModel };