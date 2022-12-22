import JobModel from '../models/JobModel';
import UserModel from '../models/UserModel';
import sequelize from '../models';
import ICreateUser from '../interfaces/ICreateUser';
import jwtUtil from '../utils/jwt.util';
import ErrorMap from '../utils/errorMap.utils';
import IUpdateUser from '../interfaces/IUpdateUser';
import ActivityModel from '../models/ActivityModel';

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

  public async updateUser(payload: IUpdateUser) {
    const { displayName, email, id } = payload;  
    const transaction = await sequelize.transaction();

    try {
      await this._user.update({ displayName: displayName, email: email }, { where: { id:id } });
      await transaction.commit();

      const updatedUser = await this._user.findByPk(id,{ attributes: {exclude: ['password']}})
      

      return { code: 200, object: { updatedUser } };
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
            model: ActivityModel,
            as: 'activities',
            through: { attributes: [] },
          },
        ],
      });
      await transaction.commit();
      return { code: 200, object: fetch };
    } catch (error) {      
      await transaction.commit();
      console.log(error)
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
