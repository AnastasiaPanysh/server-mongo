const express = require('express')
const { getUsers, getUserById, createUser } = require('../service/user.service')


const route = express.Router()

route.get('/', async (req, res) => {
    try {
        const user = await getUsers()
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

route.get('/:_id', async (req, res) => {
    try {
        const { _id } = req.params
        const user = await getUserById(_id)
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

route.post('/', async (req, res) => {
    const { name, age, email, phone, group } = req.body
    res.status(200).send(await createUser(name, age, email, phone, group))
})

module.exports = route