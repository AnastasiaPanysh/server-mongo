const { MongoClient, ObjectId } = require('mongodb')

const MongoDBclient = new MongoClient('mongodb://127.0.0.1:27017')

async function getUsersDB() {
    await MongoDBclient.connect()
    const db = MongoDBclient.db('hschool');
    const collection = db.collection('students');
    const data = await collection.find().toArray()
    return data
}

async function getUserByIdDB(user_id) {
    await MongoDBclient.connect()
    const db = MongoDBclient.db('hschool');
    const collection = db.collection('students');
    const user = await collection.findOne({ _id: new ObjectId(user_id) });
    return user;
}

async function createUsersDB(name, surname, birth, city, age) {

}

async function updateUsersDB(info_id, name, surname, birth, city, age) {

}

async function deleteUsersDB(info_id) {

}

async function patchUsersDB(info_id, dataFromClient) {

}




module.exports = { getUsersDB, getUserByIdDB, createUsersDB, updateUsersDB, deleteUsersDB, patchUsersDB }