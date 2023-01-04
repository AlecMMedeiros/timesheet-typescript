import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class UserModel extends Model {
  declare id: number;
  declare displayName: string;
  declare email: string;
  declare password: string;
}

UserModel.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
    },
    displayName: {
      type: STRING,
      allowNull: false,
    },
    email: {
      type: STRING,
      allowNull: false,
    },
    password: {
      type: STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'users',
    modelName: 'users',
    sequelize: db,
    underscored: true,
    timestamps: false,
  }
);

export default UserModel;
