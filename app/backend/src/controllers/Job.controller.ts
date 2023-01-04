import { Request, Response } from 'express';
import JobServices from '../services/Job.service';

export default class JobController {
  private _jobservice = new JobServices();

  public async registerJob(req: Request, res: Response) {
    const newJob = await this._jobservice.createJob(req.body);

    return res.status(newJob.code).json(newJob.object);
  }

  public async updateJob(req: Request, res: Response) {
    const { id } = req.params;
    const payload = { ...req.body, id };

    const updatedJob = await this._jobservice.updateJob(payload);

    return res.status(updatedJob.code).json(updatedJob.object);
  }

  public async listJobs(req: Request, res: Response) {
    const fetch = await this._jobservice.fetchJobs();

    return res.status(fetch.code).json(fetch.object);
  }

  public async listJobsById(req: Request, res: Response) {
    const { id } = req.params;
    const fetch = await this._jobservice.fetchJobById(Number(id));

    return res
      .status(fetch.code)
      .json(fetch.object || { message: fetch.message });
  }
}
