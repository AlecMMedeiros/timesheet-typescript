import { Request, Response, NextFunction } from "express";
import UserModel from "../models/UserModel";

import ErrorMap from "../utils/errorMap.utils";


export default class ValidateUsers {
  private _user = UserModel;
  private _ErrorMap = new ErrorMap();

  public async validateNewUSer (req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;
    const user = await this._user.findOne({ where: { email } });
  
    if (user) {
      return res.status(this._ErrorMap.userError.type02.code).json({ message: this._ErrorMap.userError.type02.message });
    }
  
   next();
  };
}

