const { userService } = require('../services');

const registerUser = async (req, res) => {
  const newUser = await userService.createUser(req.body);

  return res.status(newUser.code).json(newUser.object);
};

module.exports = {
  registerUser,
}