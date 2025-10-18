// Importar a conexão com o banco de dados e o tipo de dados SQL
const {sql, getConnection} = require("../config/db");

const clienteModel = {
    buscarTodos: async ()=>{
        try {
            
            const pool = await getConnection();

            let querySQL = "SELECT * FROM Clientes";

            const result = await pool.request().query(querySQL);

            return result.recordset;

        } catch (error) {
            console.error("Erro ao buscar Clientes:", error);
            throw error;
        }
    },

    inserirCliente: async (nomeCliente, idCliente, cpfCliente)=>{
        try{
            
            const pool = await getConnection();

            let querySQL = 'INSERT INTO Cliente (nomeCliente, idCliente, cpfCliente) VALUES (@nomeCliente, @idCliente, @cpfCliente)';
             
            await pool.request()
                .input('nomeCliente', sql.VarChar(100),
                nomeCliente)
                .input('idCliente', sql.Decimal(10,2), 
                idCliente)
                 .input('cpfCliente', sql.Decimal(10,2), 
                cpfCliente)
                .query(querySQL);

        }catch (error) {
            console.error('Erro ao inserir cliente:',error);
            throw error;
        }
    }
};

module.exports = { clienteModel };