import ICreateActivity from '../interfaces/ICreateActivity';
import sequelize from '../models';
import ErrorMap from '../utils/errorMap.utils';
import ActivityModel from '../models/ActivityModel';
import UserActivityModel from '../models/UserActivityModel';


export default class ActivityServices {
  private _activity = ActivityModel;
  private _useractivity = UserActivityModel;
  private _ErrorMap = new ErrorMap();

  public async createActivity(payload: ICreateActivity) {
    const { id, ...withoutID } = payload;
    const transaction = await sequelize.transaction();

    try {
      const newActivity = await this._activity.create(withoutID);
      const getNewActivity = await this._activity.findByPk(newActivity.null);
      const getHourId = getNewActivity!.dataValues.id;

      this._useractivity.create({ user_id: id, hour_id: getHourId });

      await transaction.commit();

      return { code: 201, object: getNewActivity };
    } catch (error) {
      await transaction.rollback();

      throw this._ErrorMap.activityError.type04;
    }
  }
}
