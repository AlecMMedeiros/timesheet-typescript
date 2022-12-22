import JoiSchemas from "../utils/joiSchemas.util";
import { NextFunction, Request, Response } from "express";


export default class BodyValidation {
  private _Joi = new JoiSchemas()

  public async loginBody (req: Request, res: Response, next: NextFunction) {
    const { error } = this._Joi.loginSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
  
    next();
  };
  
  public async userBody (req: Request, res: Response, next: NextFunction) {
    const { error } = this._Joi.userSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
  
    next();
  };

  public async userUpdateBody (req: Request, res: Response, next: NextFunction) {
    const { error } = this._Joi.userUpdateSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
  
    next();
  };
  
  public async jobBody (req: Request, res: Response, next: NextFunction) {
    const { error } = this._Joi.jobSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
  
    next();
  };

  public async jobUpdateBody (req: Request, res: Response, next: NextFunction) {
    const { error } = this._Joi.jobUpdateSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
  
    next();
  };

  public async activityBody (req: Request, res: Response, next: NextFunction) {
    const { error } = this._Joi.activitySchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
  
    next();
  };
}

