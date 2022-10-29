const authMiddleware = require('./auth.middleware');
const reqBodyMiddleware = require('./reqBodyValidate.middleware');
const userMiddleware = require('./user.middleware');
const jobMiddleware = require('./job.middleware');

module.exports = {
  authMiddleware,
  reqBodyMiddleware,
  userMiddleware,
  jobMiddleware,
};
