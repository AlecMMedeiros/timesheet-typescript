import * as Joi from 'joi';

export default class JoiSchemas {
  private _errorMessage = 'Some required fields are missing'; 
  
  public loginSchema = Joi.object({
    email: Joi.string().email().required().messages({
      'any.required': this._errorMessage,
      'string.empty': this._errorMessage,
    }),
    password: Joi.string().required().messages({
      'any.required': this._errorMessage,
      'string.empty': this._errorMessage,   
    }),
  });
  
  
  public userSchema = Joi.object({
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

  public userUpdateSchema = Joi.object({
    displayName: Joi.string().min(8).required().messages({
      'string.min': '"displayName" length must be at least 8 characters long',
    }),
    email: Joi.string().email().required().messages({
      'string.min': '"email" must be a valid email',
    }),
  });
  
  public jobSchema = Joi.object({
    title: Joi.string().min(8).required().messages({
      'any.required': this._errorMessage,
      'string.min': '"title" length must be at least 8 characters long',
    }),
    description: Joi.string().min(40).required().messages({
      'any.required': this._errorMessage,
      'string.min': '"description" length must be at least 40 characters long',
    }),
    os: Joi.number().min(1).required().messages({
      'any.required': this._errorMessage,
      'number.min': '"os" length must be at least 1 characters long',
    }),
    estimatedHours: Joi.string().required().messages({
      'any.required': this._errorMessage,
      'string.min': '"description" length must be at least 40 characters long',
    }),
    userIds: Joi.array().items(Joi.number().required().messages({
      'any.required': '"userIds" at least one userId',
    }))
  });

  public jobUpdateSchema = Joi.object({
    title: Joi.string().min(8).required().messages({
      'any.required': this._errorMessage,
      'string.min': '"title" length must be at least 8 characters long',
    }),
    description: Joi.string().min(40).required().messages({
      'any.required': this._errorMessage,
      'string.min': '"description" length must be at least 40 characters long',
    }),
    os: Joi.number().min(1).required().messages({
      'any.required': this._errorMessage,
      'number.min': '"os" length must be at least 1 characters long',
    }),
    estimatedHours: Joi.string().required().messages({
      'any.required': this._errorMessage,
      'string.min': '"description" length must be at least 40 characters long',
    }),
    status: Joi.string().required().messages({
      'any.required': this._errorMessage,      
    }),
    userIds: Joi.array().items(Joi.number().required().messages({
      'any.required': '"userIds" at least one userId',
    })),
  });

  public activitySchema = Joi.object({
    activity: Joi.string().min(8).required().messages({
      'any.required': this._errorMessage,
      'string.min': '"activity" length must be at least 8 characters long',
    }),
    hours: Joi.string().regex(/^([0-9]{2})\:([0-9]{2})$/).required().messages({
      'any.required': this._errorMessage,
      'string.regex': '"hours" format must be HH:MIN',
    }),
    comment: Joi.string().min(8).required().messages({
      'any.required': this._errorMessage,
      'string.min': '"comment" length must be at least 8 characters long',
    }),
    date: Joi.date().required().messages({
      'any.required': this._errorMessage,     
    }),
  });
}
