const express = require('express')

const routes = express.Router()

const ClientController = require('./controllers/ClientController')

routes.get('/index', ClientController.showIndex)

routes.get('/cadastrar', (req, res) => res.render('cadastrar'))
routes.post('/cadastrar', ClientController.create)

routes.get('/listar', ClientController.show)

routes.get('/alterar', ClientController.getByID)
routes.post('/alterar', ClientController.update)

routes.get('/excluir', ClientController.delete)

module.exports = routes