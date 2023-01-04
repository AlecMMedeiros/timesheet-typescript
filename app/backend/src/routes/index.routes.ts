import { Router } from 'express';
import User from './user.routes';
import Job from './job.routes';
import Activity from './activity.routes';

const router = Router();

router.use('/user', User);
router.use('/job', Job);
router.use('/Activity', Activity);

export default router;
