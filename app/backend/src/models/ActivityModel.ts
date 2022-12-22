import moment from 'moment';
import { Model, INTEGER, STRING, DATEONLY, TIME, Identifier } from 'sequelize';
import db from '.';
import UserHoursModel from './UserActivityModel';
import UserModel from './UserModel';
class ActivityModel extends Model {
  declare id: number;
  declare activity: string;
  declare hours: moment.Duration;
  declare Comment: string;
  declare date: Date;
  declare null: Identifier | undefined;
  declare dataValues: any;
  
}

ActivityModel.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true
    },
    activity: {
      type: STRING,
      allowNull: false
    },
    hours: {
      type: TIME,
      allowNull: false
    },
    comment: {
      type: STRING,
      allowNull: false
    },
    date: {
      type: DATEONLY,
      allowNull: false
    },
  },
  {
    tableName: 'activities',
    modelName: 'activities',
    sequelize: db,
    underscored: true,   
    timestamps: false,
  },
);

UserModel.belongsToMany(ActivityModel, {
  as: 'activities',
  through: UserHoursModel,
  foreignKey: 'user_id',
  otherKey: 'activity_id',
});

ActivityModel.belongsToMany(UserModel, {
  as: 'users',
  through: UserHoursModel,
  foreignKey: 'activity_id',
  otherKey: 'user_id',
});

export default ActivityModel;
