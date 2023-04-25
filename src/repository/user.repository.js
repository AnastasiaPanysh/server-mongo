const {MongoClient} = require('mongodb')

const MongoDBclient = new MongoClient('mongodb://localhost:27017')

async function getUsersDB() {
    const client = await MongoDBclient.connect()
    let data = await User.findOne({ Email: email });
    return data.Email
    return data
}

async function getUsersByIdDB(user_id) {
    
}

async function createUsersDB(name, surname, birth, city, age) {
  
}

async function updateUsersDB(info_id, name, surname, birth, city, age) {
   
}

async function deleteUsersDB(info_id) {
    
}

async function patchUsersDB(info_id, dataFromClient) {
    
}




module.exports = { getUsersDB, getUsersByIdDB, createUsersDB, updateUsersDB, deleteUsersDB, patchUsersDB }