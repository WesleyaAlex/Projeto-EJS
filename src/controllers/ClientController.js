const Client = require('../models/Client')

module.exports = {

    async create(req, res) {
        const client = {
            nome: req.body.nome,
            email: req.body.email,
            idade: req.body.idade
        }

        await Client.create(client)

        return res.render("cadastrado", { client })
    },

    async show(req, res) {
        const clientes = await Client.show()

        return res.render("listar", { clientes })
    },

    async getByID(req, res) {
        const id = req.query.id

        const client = await Client.getByID(id)

        return res.render("alterar", { client })
    },

    async update(req, res) {
        const cliente = req.body

        const client = await Client.update(cliente)

        return res.render("alterado", { client })
    },

    async delete(req, res) {
        const id = req.query.id

        await Client.delete(id)

        const quantidade = await Client.showIndex()

        return res.render("index", { quantidade })
    },

    async showIndex(req, res) {
        const quantidade = await Client.showIndex()

        return res.render("index", { quantidade })
    }
}