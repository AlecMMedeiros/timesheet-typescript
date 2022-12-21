import { Router } from 'express'
import UserController from "../controllers/User.controller";
import BodyValidation from '../middlewares/reqBodyValidate.middleware';

const { userMiddleware } = require('../middlewares');

const router = Router();

const userController = new UserController();
const reqBodyMiddleware = new BodyValidation();

router.get('/:id',
  userController.listUsersById.bind(userController));

router.get('/',
  userController.listUsers.bind(userController));

router.post('/',
  reqBodyMiddleware.userBody.bind(reqBodyMiddleware),
  userMiddleware.validateNewUSer,
  userController.registerUser.bind(userController));



export default router;