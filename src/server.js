const express = require('express')

const routes = require('./routes')
const path = require('path')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'))

const port = 4455
app.listen(port, console.log('Servidor rodando na porta: ' + port))