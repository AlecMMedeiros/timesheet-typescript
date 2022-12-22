import ActivityServices from "../services/Activity.service";
import { Response, Request } from "express";

export default class ActivityController {
  private _activityservice = new ActivityServices();

  public async createActivity (req: Request, res: Response) {
    const { id } = req.params;
    const payload = {...req.body, id}
    console.log(payload)
    const newActivity = await this._activityservice.createActivity(payload)

    return res.status(newActivity.code).json(newActivity.object)
  }
}
