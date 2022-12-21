import { Request, Response, NextFunction } from "express";
import { Op } from "sequelize";
import UserModel from "../models/UserModel";

import ErrorMap from "../utils/errorMap.utils";


export default class ValidateUsers {
  private _user = UserModel;
  private _ErrorMap = new ErrorMap();

  public async validateNewUSer (req: Request, res: Response, next: NextFunction) {
    const { displayName,email } = req.body;
    const user = await this._user.findOne({
      where: {
        [Op.and]: [
          { email: email },
          { displayName: displayName }
        ]
      }
    })
  
    if (user) {
      return res.status(this._ErrorMap.userError.type02.code).json({ message: this._ErrorMap.userError.type02.message });
    }
  
   next();
  };
}

