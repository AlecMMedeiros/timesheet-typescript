import express from 'express';
import ActivityController from '../controllers/Activity.controller';

const router = express.Router();

const activityController = new ActivityController();

router.get('/', activityController.listAllActivities.bind(activityController));

export default router;
