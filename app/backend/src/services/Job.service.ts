const { jobError } = require("../utils/errorMap.utils");
import JobModel from "../models/JobModel";
import UserModel from "../models/UserModel";
import UserJobsModel from "../models/UserJobModel";
import ICreateJob from "../interfaces/ICreateJob";
import sequelize from "../models";

export default class JobServices {
  private _job = JobModel;
  private _userjob = UserJobsModel;



  public async fetchJobById(id:number) {
    try {
      const result = await this._job.findOne({
        where: { id },
        include: [{
          model: UserModel,
          as: 'users',
          attributes: { exclude: ['password', 'id'] },
          through: { attributes: [] }
        }],
      });
  
      return { code: 200, object: result };
  
    } catch (error) {
      console.log(error)
      return { code: 400, message: 'Error' };
    }
  };
  
  public async createJob (payload: ICreateJob) {
    const { title, description, os, estimatedHours, userIds } = payload;
    const transaction = await sequelize.transaction();
  
    try {
      const newJob = await this._job.create({ title, description, os, estimatedHours, status: 'Aguardando inicio' })
      const getchNewJob = await this._job.findByPk(newJob.null);
      const getJobId = getchNewJob!.dataValues.id;
  
      await Promise.all(userIds.map(
        async (userId) => this._userjob.create({ userId, jobId: getJobId }),
      ));
  
      await transaction.commit();
  
      return { code: 201, object: getchNewJob }
  
    } catch (error) {
      console.log(error)
      await transaction.rollback();
  
      throw jobError.type04;
    }
  }
  
  public async fetchJobs () {
    const transaction = await sequelize.transaction();
    try {
      const fetch = await this._job.findAll(
        {
          include: [{
            model: UserModel,
            as: 'users',         
            attributes: { exclude: ['password', 'id'] },
            through: { attributes: [] }
          }]
        });
        console.log(fetch) 
      await transaction.commit();
  
      return { code: 200, object: fetch };
    } catch (error) {
      console.log(error)
      transaction.rollback();
  
      throw jobError.type04;
    }
  };
}


