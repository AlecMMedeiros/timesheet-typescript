import JobModel from "../models/JobModel";
import UserModel from "../models/UserModel";
import sequelize from "../models";
import ICreateUser from "../interfaces/ICreateUser";
const { userError } = require("../utils/errorMap.utils");
const jwt = require('../utils/jwt.util');

export default class UserService {
  private _job = JobModel;
  private _user = UserModel;


  public async createUser (payload: ICreateUser) {
    const { displayName, email, password } = payload;
    const { password: _, ...userWithoutPassword } = payload;
    const transaction = await sequelize.transaction();
  
    try {
      const token = jwt.createToken(userWithoutPassword);
  
      await this._user.create({ displayName, email, password });
      await transaction.commit();
  
      return { code: 201, object: { token } };
    } catch (error) {
      transaction.rollback();
  
      throw userError.type04;
    }
  };
  
  public async fetchUsers () {
    const transaction = await sequelize.transaction();
    try {
      const fetch = await this._user.findAll({
        attributes: { exclude: ['password'] },
        include: [{
          model: JobModel,
          as: 'jobs',        
          through: { attributes: [] }
        }]
      });
      console.log(fetch)
      await transaction.commit();
      return { code: 200, object: fetch };
    } catch (error) {
      
      await transaction.commit();
  
      throw userError.type04;
    }
  };
  
  public async fetchUsersById (id:number | string) {
    try {
      const fetch = await this._user.findOne({
        where: { id },
        attributes: { exclude: ['password', 'id'] },
        include: [{ model: JobModel, as: 'jobs', through: { attributes: [] } }],
      });    
  
      return { code: 200, object: fetch };
    } catch (error) {
  
      throw userError.type04;
    }
  };
}
