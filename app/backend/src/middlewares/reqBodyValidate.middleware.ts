const joiSchema = require('../utils/joiSchemas.util');

import { NextFunction, Request, Response } from "express";

export default class BodyValidation {

  public async loginBody (req: Request, res: Response, next: NextFunction) {
    const { error } = joiSchema.loginSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
  
    next();
  };
  
  public async userBody (req: Request, res: Response, next: NextFunction) {
    const { error } = joiSchema.userSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
  
    next();
  };
  
  public async jobBody (req: Request, res: Response, next: NextFunction) {
    const { error } = joiSchema.jobSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
  
    next();
  };
}

