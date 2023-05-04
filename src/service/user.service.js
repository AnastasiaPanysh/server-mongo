const { getUsersDB, getUserByIdDB, createUserDB } = require('../repository/user.repository')


async function getUsers() {
    const users = await getUsersDB()
    if (!users.length) throw new Error('getUser: this user is not defind.')
    return users
}

async function getUserById(_id) {
    return await getUserByIdDB(_id)
}

async function createUser( name, age, email, phone, group) {
    return await createUserDB( name, age, email, phone, group)
}




module.exports = { getUsers, getUserById, createUser}