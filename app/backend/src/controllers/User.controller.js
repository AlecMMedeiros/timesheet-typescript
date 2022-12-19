const { userService } = require('../services');

const registerUser = async (req, res) => {
  const newUser = await userService.createUser(req.body);

  return res.status(newUser.code).json(newUser.object);
};

const listUsers = async (req, res) => {
  const fetch = await userService.fetchUsers();

  return res.status(fetch.code).json(fetch.object || { message: fetch.message });
}

const listUsersById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const fetch = await userService.fetchUsersById(id);
  console.log(fetch);

  return res.status(fetch.code).json(fetch.object || { message: fetch.message });
}
module.exports = {
  registerUser,
  listUsers,
  listUsersById,
}