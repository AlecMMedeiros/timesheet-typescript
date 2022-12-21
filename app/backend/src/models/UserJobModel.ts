import { INTEGER, Model } from 'sequelize';
import db from '.';

class UserJobsModel extends Model {}
UserJobsModel.init({ }, { 
  sequelize:db,  
  tableName: 'users_jobs',
  modelName: 'users_jobs'
 });

export default UserJobsModel;