import JobModel from '../models/JobModel';
import UserModel from '../models/UserModel';
import UserJobsModel from '../models/UserJobModel';
import ICreateJob from '../interfaces/ICreateJob';
import sequelize from '../models';
import ErrorMap from '../utils/errorMap.utils';


export default class JobServices {
  private _job = JobModel;
  private _userjob = UserJobsModel;
  private _ErrorMap = new ErrorMap();

  public async fetchJobById(id: number) {
    try {
      const result = await this._job.findOne({
        where: { id },
        include: [
          {
            model: UserModel,
            as: 'users',
            attributes: { exclude: ['password', 'id'] },
            through: { attributes: [] },
          },
        ],
      });

      return { code: 200, object: result };
    } catch (error) {
      return { code: 400, message: error };
    }
  }

  public async createJob(payload: ICreateJob) {
    const { title, description, os, estimatedHours, userIds } = payload;
    const transaction = await sequelize.transaction();

    try {
      const newJob = await this._job.create({
        title,
        description,
        os,
        estimatedHours,
        status: 'Aguardando inicio',
      });

      const getchNewJob = await this._job.findByPk(newJob.null);
      const getJobId = getchNewJob!.dataValues.id;

      await Promise.all(
        userIds.map(async (userId) =>
          this._userjob.create({ user_id: userId, job_id: getJobId })
        )
      );

      await transaction.commit();

      return { code: 201, object: getchNewJob };
    } catch (error) {
      await transaction.rollback();

      throw this._ErrorMap.jobError.type04;
    }
  }

  public async fetchJobs() {
    const transaction = await sequelize.transaction();
    try {
      const fetch = await this._job.findAll({
        include: [
          {
            model: UserModel,
            as: 'users',
            attributes: { exclude: ['password', 'id'] },
            through: { attributes: [] },
          },
        ],
      });
      await transaction.commit();

      return { code: 200, object: fetch };
    } catch (error) {  
      transaction.rollback();

      throw this._ErrorMap.jobError.type04;
    }
  }
}
