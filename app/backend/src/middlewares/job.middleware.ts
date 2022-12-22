import ErrorMap from "../utils/errorMap.utils";
import { NextFunction, Request, Response } from "express";

import JobModel from "../models/JobModel";
import UserModel from "../models/UserModel";


export default class JobMiddleware {
  private _job = JobModel;
  private _user = UserModel;
  private _ErrorMap = new ErrorMap();

  public async validateNewJob (req: Request, res: Response, next: NextFunction){
    const { title, userIds } = req.body;
    const checkSameTitle = await this._job.findOne({ where: { title } });

    const checkIds = <boolean[]> await Promise.all(
      userIds.map(async (userid:number) => {
        const check = await this._user.findByPk(userid);       
        if (check === null) return false;
      }
    ))
  
    if (checkSameTitle) {
      return res.status(this._ErrorMap.jobError.type02.code).json({ message: this._ErrorMap.jobError.type02.message });
    }
    
    if ( checkIds.includes(false) ) {
      return res.status(this._ErrorMap.jobError.type03.code).json({ message: this._ErrorMap.jobError.type03.message });
    }
    
   next();
  };
}
