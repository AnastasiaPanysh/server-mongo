const express = require('express')
const user = require('./controller/user.controller')

const app = express()

app.use('/', user)

app.use(function (error, req, res, next) {
    res.status(500).send(error.message)
})

module.exports = app