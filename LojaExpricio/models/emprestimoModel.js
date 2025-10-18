// Importar a conexão com o banco de dados e o tipo de dados SQL
const {sql, getConnection} = require("../config/db");

const emprestimoModel = {
    buscarTodos: async ()=>{
        try {
            
            const pool = await getConnection();

            let querySQL = "SELECT * FROM Emprestimo";

            const result = await pool.request().query(querySQL);

            return result.recordset;

        } catch (error) {
            console.error("Erro ao buscar emprestimo:", error);
            throw error;
        }
    },

    inserirEmprestimo: async (dataEmprestimo, idEmprestimo, dataDevolucao, idLivro, idCliente)=>{
        try{
            
            const pool = await getConnection();

            let querySQL = 'INSERT INTO Livros (dataEmprestimo, idEmprestimo,dataDevolucao, idLivro, idCliente) VALUES (@dataEmprestimo, @idEmprestimo, @dataDevolucao, @idLivro, @idCliente)';
             
            await pool.request()
                .input('dataEmprestimo', sql.Decimal(10,2), 
                dataEmprestimo)
                .input('idEmprestimo', sql.Decimal(10,2), 
                idEmprestimo)
                .input('dataDevolucao', sql.Decimal(10,2), 
                dataDevolucao)
                .input('idLivro', sql.Decimal(10,2), 
                idLivro)
                .input('idCliente', sql.Decimal(10,2), 
                idCliente)
                .query(querySQL);

        }catch (error) {
            console.error('Erro ao inserir emprestimo:',error);
            throw error;
        }
    }
};

module.exports = { emprestimoModel };