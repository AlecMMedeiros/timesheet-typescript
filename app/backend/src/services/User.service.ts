import JobModel from '../models/JobModel';
import UserModel from '../models/UserModel';
import sequelize from '../models';
import ICreateUser from '../interfaces/ICreateUser';
import jwtUtil from '../utils/jwt.util';
import ErrorMap from '../utils/errorMap.utils';

export default class UserService {  
  private _user = UserModel;
  private _jwt = new jwtUtil();
  private _ErrorMap = new ErrorMap();

  public async createUser(payload: ICreateUser) {
    const { displayName, email, password } = payload;
    const { password: _, ...userWithoutPassword } = payload;
    const transaction = await sequelize.transaction();

    try {
      const token = this._jwt.createToken(userWithoutPassword);

      await this._user.create({ displayName, email, password });
      await transaction.commit();

      return { code: 201, object: { token } };
    } catch (error) {
      transaction.rollback();

      throw this._ErrorMap.userError.type04;
    }
  }

  public async fetchUsers() {
    const transaction = await sequelize.transaction();
    try {
      const fetch = await this._user.findAll({
        attributes: { exclude: ['password'] },
        include: [
          {
            model: JobModel,
            as: 'jobs',
            through: { attributes: [] },
          },
        ],
      });
      await transaction.commit();
      return { code: 200, object: fetch };
    } catch (error) {
      await transaction.commit();

      throw this._ErrorMap.userError.type04;
    }
  }

  public async fetchUsersById(id: number | string) {
    try {
      const fetch = await this._user.findOne({
        where: { id },
        attributes: { exclude: ['password', 'id'] },
        include: [{ model: JobModel, as: 'jobs', through: { attributes: [] } }],
      });

      return { code: 200, object: fetch };
    } catch (error) {
      throw this._ErrorMap.userError.type04;
    }
  }
}
