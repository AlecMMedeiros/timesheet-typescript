import { Router } from 'express'
import ValidateUsers from '../middlewares/user.middleware';
import UserController from "../controllers/User.controller";
import BodyValidation from '../middlewares/reqBodyValidate.middleware';


const router = Router();

const userController = new UserController();
const reqBodyMiddleware = new BodyValidation();
const userMiddleware = new ValidateUsers();

router.get('/:id',
  userController.listUsersById.bind(userController));

router.get('/',
  userController.listUsers.bind(userController));

router.post('/',
  reqBodyMiddleware.userBody.bind(reqBodyMiddleware),
  userMiddleware.validateNewUSer.bind(userMiddleware),
  userController.registerUser.bind(userController));



export default router;