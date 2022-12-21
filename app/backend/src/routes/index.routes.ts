import { Router } from "express";
import User from './user.routes';
import Job from './job.routes'

const router = Router();

router.use('/user', User);
router.use('/job', Job);

export default router;


