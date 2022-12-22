import { Router } from 'express';
import ValidateUsers from '../middlewares/user.middleware';
import UserController from '../controllers/User.controller';
import BodyValidation from '../middlewares/reqBodyValidate.middleware';
import ActivityController from '../controllers/Activity.controller';

const router = Router();

const userController = new UserController();
const activitycontroller = new ActivityController();
const reqBodyMiddleware = new BodyValidation();
const userMiddleware = new ValidateUsers();

router.patch(
  '/:id',
  reqBodyMiddleware.userUpdateBody.bind(reqBodyMiddleware),
  userMiddleware.validateNewUSer.bind(userMiddleware),
  userController.updateUser.bind(userController)
);

router.get('/:id', userController.listUsersById.bind(userController));

router.get('/', userController.listUsers.bind(userController));

router.post(
  '/',
  reqBodyMiddleware.userBody.bind(reqBodyMiddleware),
  userMiddleware.validateNewUSer.bind(userMiddleware),
  userController.registerUser.bind(userController)
);

router.post(
  '/:id/activity',
  reqBodyMiddleware.activityBody.bind(reqBodyMiddleware),
  activitycontroller.createActivity.bind(activitycontroller)
);

router.get(
  '/:id/activity', 
  activitycontroller.listActivities.bind(activitycontroller)
);

router.get(
  '/:id/activity/totalhours', 
  activitycontroller.listActivitiesTotalHours.bind(activitycontroller)
);


export default router;
