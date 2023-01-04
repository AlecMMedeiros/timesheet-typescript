import express from 'express';
import JobMiddleware from '../middlewares/job.middleware';
import JobController from '../controllers/Job.controller';
import BodyValidation from '../middlewares/reqBodyValidate.middleware';

const router = express.Router();

const jobController = new JobController();
const jobMiddleware = new JobMiddleware();
const reqBodyMiddleware = new BodyValidation();

router.get('/', jobController.listJobs.bind(jobController));

router.get('/:id', jobController.listJobsById.bind(jobController));

router.post(
  '/',
  reqBodyMiddleware.jobBody.bind(reqBodyMiddleware),
  jobMiddleware.validateNewJob.bind(jobMiddleware),
  jobController.registerJob.bind(jobController)
);

router.patch(
  '/:id',
  reqBodyMiddleware.jobUpdateBody.bind(reqBodyMiddleware),
  jobController.updateJob.bind(jobController)
);

export default router;
