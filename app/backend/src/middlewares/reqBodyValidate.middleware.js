const joiSchema = require('../utils/joiSchemas.util');

const loginBody = async (req, res, next) => {
  const { error } = joiSchema.loginSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  next();
};

const userBody = async (req, res, next) => {
  const { error } = joiSchema.userSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  next();
};

const jobBody = async (req, res, next) => {
  const { error } = joiSchema.jobSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  next();
};

module.exports = {
  loginBody,
  userBody,
  jobBody,
};
