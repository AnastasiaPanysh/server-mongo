const { getUsersDB, getUserByIdDB, createUserDB, updateUserDB, deleteUserDB, patchUserDB } = require('../repository/user.repository')


async function getUsers() {
    const users = await getUsersDB()
    if (!users.length) throw new Error('getUser: this user is not defind.')
    return users
}

async function getUserById(id) {
    const user = await getUserByIdDB(id)
    if (!user.length) throw new Error('getUserById: this user is not defind.')
    return user
}

async function createUser(name, age, email, phone) {
    const user = await createUserDB(name, age, email, phone)
    if (!user.length) throw new Error('createUser: this user is not defind.')
    return user
}

async function updateUser(id, name, age, email, phone) {
    const user = await updateUserDB(id, name, age, email, phone)
    if (!user.length) throw new Error('updateUser: this user is not defind.')
    return user
}

async function deleteUser(id) {
    const user = await deleteUserDB(info_id)
    if (!user.length) throw new Error('deleteUser: this user is not defind.')
    return user
}

async function patchUser(id, dataFromClient) {
    const user = await patchUserDB(info_id, dataFromClient)
    if (!user.length) throw new Error('patchUser: this user is not defind.')
    return user
}


module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser, patchUser }