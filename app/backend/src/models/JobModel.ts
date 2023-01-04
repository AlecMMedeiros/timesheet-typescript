import { Model, INTEGER, STRING, TIME, Identifier, DATE } from 'sequelize';
import db from '.';
import UserJobsModel from './UserJobModel';
import UserModel from './UserModel';

class JobModel extends Model {
  declare id: number;
  declare title: string;
  declare description: string;
  declare os: number;
  declare estimatedHours: Date;
  declare status: string;
  declare published: Date;
  declare updated: Date;
  declare null: Identifier | undefined;
  declare dataValues: any;
}

JobModel.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
    },
    title: {
      type: STRING,
      allowNull: false,
    },
    description: {
      type: STRING,
      allowNull: false,
    },
    os: {
      type: INTEGER,
      allowNull: true,
    },
    estimatedHours: {
      type: TIME,
    },
    status: {
      type: STRING,
    },
  },
  {
    tableName: 'jobs',
    modelName: 'jobs',
    sequelize: db,
    timestamps: true,
    underscored: true,
  }
);

UserModel.belongsToMany(JobModel, {
  as: 'jobs',
  through: UserJobsModel,
  foreignKey: 'user_id',
  otherKey: 'job_id',
});

JobModel.belongsToMany(UserModel, {
  as: 'users',
  through: UserJobsModel,
  foreignKey: 'job_id',
  otherKey: 'user_id',
});

export default JobModel;
