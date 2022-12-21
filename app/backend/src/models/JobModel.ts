import { Model, INTEGER, STRING, TIME, Identifier } from 'sequelize';
import db from '.';
import UserJobsModel from './UserJobModel';
import UserModel from './UserModel';



class JobModel extends Model {
  declare id: number;
  declare title: string;
  declare description: string;
  declare os: number;
  declare estimatedHours:Date;
  declare status: string;
  declare published: Date;
  declare updated: Date    
  null: Identifier | undefined;
  dataValues: any;
}

JobModel.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true
    },
    title: {
      type: STRING,
      allowNull: false
    },
    description: {
      type: STRING,
      allowNull: false
    },
    os: {
      type: INTEGER,
      allowNull: true
    },
    estimatedHours: {
      type: TIME,
    },
    status: {
      type: STRING
    },
    published: {
      type: TIME
    },
    updated: {
      type: TIME
    },
  }, 
  {
    tableName: 'jobs',
    underscored: true,
    sequelize: db,
    modelName: 'jobs',
    timestamps: true,
    createdAt: 'published',
    updatedAt: 'updated'
  },
);
 
UserModel.belongsToMany(JobModel, { as:'jobs', through: UserJobsModel, foreignKey: 'user_id', otherKey: 'job_id'});

JobModel.belongsToMany(UserModel, { as: 'users', through: UserJobsModel, foreignKey: 'job_id', otherKey: 'user_id'});

export default JobModel;

