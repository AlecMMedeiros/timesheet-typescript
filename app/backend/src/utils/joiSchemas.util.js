const Joi = require('joi');

const errorMessage = 'Some required fields are missing';

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': errorMessage,
    'string.empty': errorMessage,
  }),
  password: Joi.string().required().messages({
    'any.required': errorMessage,
    'string.empty': errorMessage,   
  }),
});


const userSchema = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'string.min': '"displayName" length must be at least 8 characters long',
  }),
  email: Joi.string().email().required().messages({
    'string.min': '"email" must be a valid email',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': '"password" length must be at least 6 characters long',
  }),
});

const jobSchema = Joi.object({
  title: Joi.string().min(8).required().messages({
    'any.required': errorMessage,
    'string.min': '"title" length must be at least 8 characters long',
  }),
  description: Joi.string().min(40).required().messages({
    'any.required': errorMessage,
    'string.min': '"description" length must be at least 40 characters long',
  }),
  os: Joi.number().min(1).required().messages({
    'any.required': errorMessage,
    'number.min': '"os" length must be at least 1 characters long',
  }),
  estimatedHours: Joi.string().required().messages({
    'any.required': errorMessage,
    'string.min': '"description" length must be at least 40 characters long',
  }),
  userIds: Joi.array().items(Joi.number().required().messages({
    'any.required': '"userIds" at least one userId',
  }))
});


module.exports = {
  loginSchema,
  userSchema,
  jobSchema,
};
