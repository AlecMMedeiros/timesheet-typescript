import ICreateActivity from '../interfaces/ICreateActivity';
import sequelize from '../models';
import ErrorMap from '../utils/errorMap.utils';
import ActivityModel from '../models/ActivityModel';
import UserActivityModel from '../models/UserActivityModel';
import UserModel from '../models/UserModel';
import moment from 'moment';

export default class ActivityServices {
  private _activity = ActivityModel;
  private _useractivity = UserActivityModel;
  private _ErrorMap: ErrorMap;
  private _moment = moment;

  constructor() {
    this._ErrorMap = new ErrorMap();
  }

  public async createActivity(payload: ICreateActivity) {
    const { id, ...withoutID } = payload;
    const transaction = await sequelize.transaction();

    try {
      const newActivity = await this._activity.create(withoutID);
      const getNewActivity = await this._activity.findByPk(newActivity.null);
      const getHourId = getNewActivity!.dataValues.id;

      await this._useractivity.create({ user_id: id, activity_id: getHourId });

      await transaction.commit();

      return { code: 201, object: getNewActivity };
    } catch (error) {
      await transaction.rollback();

      throw this._ErrorMap.activityError.type04;
    }
  }

  public async listActivities(id: number) {
    const fetchActivities = await this._activity.findAll({
      include: [
        {
          model: UserModel,
          as: 'users',
          where: { id: id },
          attributes: { exclude: ['password', 'id'] },
          through: { attributes: [] },
        },
      ],
    });
    return { code: 200, object: fetchActivities };
  }

  public async listAllActivities() {
    const fetchActivities = await this._activity.findAll({
      include: [
        {
          model: UserModel,
          as: 'users',         
          attributes: { exclude: ['password', 'id'] },
          through: { attributes: [] },
        },
      ],
    });
    return { code: 200, object: fetchActivities };
  }

  public async totalHours(id: number) {
    const filteredUser = await this.listActivities(id);
    const totalValue: { activity: string; value: string }[] = [];
    for ( let index = 0; index < filteredUser.object.length; index += 1) {     
        const currentElement = filteredUser.object[index].dataValues;
        if (totalValue.some((ele) => (ele.activity === currentElement.activity)) === true) {
          const index = totalValue.map((e) => e).findIndex((elem) => elem.activity === currentElement.activity);         
          const actuaValue = moment.duration(totalValue[index].value);
          const newValue = actuaValue.add(currentElement.hours).toISOString();
          totalValue[index].value = newValue;
        }else {
          totalValue.push({
            activity: currentElement.activity,
            value: moment.duration(currentElement.hours).toISOString(),
          });
        }
      }       
    return { code: 200 , object: totalValue}
  }
}
