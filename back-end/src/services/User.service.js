const { sequelize, User, Job } = require("../models");
const { userError } = require("../utils/errorMap.utils");
const jwt = require('../utils/jwt.util');

const createUser = async (payload) => {
  const { displayName, email, password } = payload;
  const { password: _, ...userWithoutPassword } = payload;
  const transaction = await sequelize.transaction();

  try {
    const token = jwt.createToken(userWithoutPassword);

    await User.create({ displayName, email, password });
    await transaction.commit();

    return { code: 201, object: { token } };
  } catch (error) {
    transaction.rollback();

    throw userError.type04;
  }
};

const fetchUsers = async () => {
  try {
    const fetch = await User.findAll({ include: { association: [alias] } });

    return { code: 200, object: fetch };
  } catch (error) {

    throw userError.type04;
  }
};

const fetchUsersById = async (id) => {
  try {
    const fetch = await User.findOne({
      where: { id },
      include: [{ model: Job, as: 'jobs', through: { attributes: [] } }],
    });

    console.log(fetch);

    return { code: 200, object: fetch };
  } catch (error) {

    throw userError.type04;
  }
};

module.exports = {
  createUser,
  fetchUsers,
  fetchUsersById,
}