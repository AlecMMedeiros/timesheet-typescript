import { Request, Response, NextFunction } from "express";

import ErrorMap from "../utils/errorMap.utils";

import jwtUtil from "../utils/jwt.util";

export default class AuthMiddleware {
  private _jwtUtil = new jwtUtil();
  private _ErrorMap = new ErrorMap();

  public async validateAccess (req: Request, res:Response, next: NextFunction)  {
    const { authorization } = req.headers;
    if (!authorization) {
   return res.status(this._ErrorMap.loginError.type02.code).json({ message: this._ErrorMap.loginError.type02.message }); 
  }
  
    const user = await this._jwtUtil.validateToken(authorization);
  
    if (user.code) return res.status(user.code).json({ message: user.message });
  
    next();
  };

};
