const express = require('express')
const bodyParser = require('body-parser')
const user = require('./controller/user.controller')
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('../swagger.json')

const app = express()


app.use(bodyParser.json())
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.use('/user', user)

app.use(function (error, req, res, next) {
    res.status(500).send(error.message)
})

module.exports = app