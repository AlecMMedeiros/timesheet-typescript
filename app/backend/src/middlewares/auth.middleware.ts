import { Request, Response, NextFunction } from "express";

import ErrorMap from "../utils/errorMap.utils";

import validationUseful from "../utils/validations.util";

export default class AuthMiddleware {
  private _validationUseful = new validationUseful();
  private _ErrorMap = new ErrorMap();

  public async validateAccess (req: Request, res:Response, next: NextFunction)  {
    const { authorization } = req.headers;
    if (!authorization) {
   return res.status(this._ErrorMap.loginError.type02.code).json({ message: this._ErrorMap.loginError.type02.message }); 
  }
  
    const user = await this._validationUseful.validateToken(authorization);
  
    if (user.code) return res.status(user.code).json({ message: user.message });
  
    next();
  };

};
