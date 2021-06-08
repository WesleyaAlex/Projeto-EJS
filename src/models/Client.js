const Database = require('../db/config')

module.exports = {

    async create(Cliente){
        const db = await Database()

        await db.run(`INSERT INTO clientes (
            nome,
            email,
            idade
        ) VALUES (
            "${Cliente.nome}",
            "${Cliente.email}",
            ${Cliente.idade}
        )`)

        await db.close()
    },

    async show(){
        const db = await Database()

        const clientes = await db.all(`SELECT * FROM clientes`)

        await db.close()

        return clientes.map(cliente => ({
            id: cliente.id,
            nome: cliente.nome,
            email: cliente.email,
            idade: cliente.idade
        }))
    },

    async getByID(id){
        const db = await Database()

        const cliente = await db.get(`SELECT * FROM clientes WHERE id=${id}`)

        await db.close()

        return cliente
    },

    async update(cliente){
        const db = await Database()

        await db.run(`UPDATE clientes SET 
            nome = "${cliente.nome}",
            email = "${cliente.email}",
            idade = ${cliente.idade}
        WHERE id = ${cliente.id}`)
        
        await db.close()

        return cliente
    },

    async delete(id){
        const db = await Database()

        await db.run(`DELETE FROM clientes WHERE id=${id}`)
        
        await db.close()
    },

    async showIndex(){
        const db = await Database()

        const { quantidade } = await db.get(`SELECT COUNT(*) as quantidade FROM  clientes`)
       
        await db.close()

        return quantidade
    }
}