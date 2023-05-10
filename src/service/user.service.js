const { getUsersDB, getUserByIdDB, createUserDB, updateUserDB, deleteUserDB } = require('../repository/user.repository');

async function getUsers() {
  const users = await getUsersDB();
  if (!users.length) throw new Error('getUser: this user is not defind.');
  return users;
}

async function getUserById(_id) {
  return await getUserByIdDB(_id);
}

async function createUser(name, age, email, phone, group) {
  return await createUserDB(name, age, email, phone, group);
}

async function updateUser(_id, name, age, email, phone, group) {
  return await updateUserDB(_id, name, age, email, phone, group);
}

async function deleteUser(_id) {
  return await deleteUserDB(_id);
}

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
