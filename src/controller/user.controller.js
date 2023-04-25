const express = require('express')
const { getUsers, getUserById, createUsers, updateUser, deleteUser, patchUser } = require('../services/services.user')


const route = express.Router()

route.get('/', async (req, res) => {
    try {
        const user = await getUsers()
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

route.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const user = await getUserById(id)
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

route.post('/', isValidBody, async (req, res) => {
    try {
        const { name, age, email, phone } = req.body
        const user = await createUser(name, age, email, phone)
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

route.put('/:id', isValidBody, async (req, res) => {
    try {
        const { id } = req.params
        const { name, age, email, phone } = req.body
        const user = await updateUser(id, name, age, email, phone)
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

route.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const user = await deleteUser(id)
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

route.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const user = await patchUser(id, req.body)
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = route