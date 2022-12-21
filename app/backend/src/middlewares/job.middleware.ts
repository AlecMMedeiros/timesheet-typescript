import ErrorMap from "../utils/errorMap.utils";
import { NextFunction, Request, Response } from "express";

import JobModel from "../models/JobModel";

export default class JobMiddleware {
  private _job = JobModel;
  private _ErrorMap = new ErrorMap();

  public async validateNewJob (req: Request, res: Response, next: NextFunction){
    const { title } = req.body;
    const checkSameTitle = await this._job.findOne({ where: { title } });
  
    if (checkSameTitle) {
      return res.status(this._ErrorMap.jobError.type02.code).json({ message: this._ErrorMap.jobError.type02.message });
    }
  
   next();
  };
}
