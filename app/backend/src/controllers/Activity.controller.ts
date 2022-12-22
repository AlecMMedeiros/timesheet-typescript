import ActivityServices from '../services/Activity.service';
import { Response, Request } from 'express';

export default class ActivityController {
  private _activityservice = new ActivityServices();

  public async createActivity(req: Request, res: Response) {
    const { id } = req.params;
    const payload = { ...req.body, id };  

    const newActivity = await this._activityservice.createActivity(payload);

    return res.status(newActivity.code).json(newActivity.object);
  }

  public async listActivities (req: Request, res: Response) {
    const { id } = req.params;
    const fetchedActivities = await this._activityservice.listActivities(Number(id));

    return res.status(fetchedActivities.code).json(fetchedActivities.object);
  }

  public async listActivitiesTotalHours (req: Request, res: Response) {
    const { id } = req.params;
    const fetchedValues = await this._activityservice.totalHours(Number(id));

   return res.status(fetchedValues.code).json(fetchedValues.object);  
  }
}
