import { Model } from 'sequelize';
import db from '.';

class UserActivityModel extends Model {}
UserActivityModel.init(
  {},
  {
    sequelize: db,
    tableName: 'users_activities',
    modelName: 'users_activities',
    timestamps: false,
  }
);

export default UserActivityModel;
