const { connect } = require('../db');
const { ObjectId } = require('mongodb');

async function getUsersDB() {
  const { students } = await connect();
  return await students.find().toArray();
}
async function getUserByIdDB(_id) {
  const { students } = await connect();
  return await students.findOne({ _id: new ObjectId(_id) });
}

async function createUserDB(name, age, email, phone, group) {
  const { students } = await connect();
  return await students.insertOne({ name: name, age: age, email: email, phone: phone, group: group });
}

async function updateUserDB(_id, name, age, email, phone, group) {
  const { students } = await connect();
  return await students.updateOne({ _id: new ObjectId(_id) }, { $set: { name: name, age: age, email: email, phone: phone, group: group } });
}

async function deleteUserDB(_id) {
  const { students } = await connect();
  return await students.deleteOne({ _id: new ObjectId(_id) });
}

module.exports = { getUsersDB, getUserByIdDB, createUserDB, updateUserDB, deleteUserDB };
