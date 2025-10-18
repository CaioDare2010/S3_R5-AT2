// Importar a conexão com o banco de dados e o tipo de dados SQL
const {sql, getConnection} = require("../config/db");

const autorModel = {
    buscarTodos: async ()=>{
        try {
            
            const pool = await getConnection();

            let querySQL = "SELECT * FROM Autor";

            const result = await pool.request().query(querySQL);

            return result.recordset;

        } catch (error) {
            console.error("Erro ao buscar Autor:", error);
            throw error;
        }
    },

    inserirLivros: async (nomeAutor, nacionalidade, idade)=>{
        try{
            
            const pool = await getConnection();

            let querySQL = 'INSERT INTO Livros (nomeAutor, nacionalidade, idade) VALUES (@nomeAutor, @nacionalidade, @idade)';
             
            await pool.request()
                .input('nomeAutor', sql.VarChar(100),
                nomeAutor)
                input('nacionalidade', sql.VarChar(100), 
                nacionalidade)
                .input('idade', sql.Decimal(10,2), 
                idade)
                .query(querySQL);

        }catch (error) {
            console.error('Erro ao inserir autor:',error);
            throw error;
        }
    }
};

module.exports = { autorModel };