import express from 'express'
import ActivityController from "../controllers/Activity.controller";


const router = express.Router();

const activitycontroller = new ActivityController();

router.post('/', activitycontroller.createActivity.bind(activitycontroller))

export default router;
