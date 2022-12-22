"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_middleware_1 = __importDefault(require("../middlewares/user.middleware"));
const User_controller_1 = __importDefault(require("../controllers/User.controller"));
const reqBodyValidate_middleware_1 = __importDefault(require("../middlewares/reqBodyValidate.middleware"));
const Activity_controller_1 = __importDefault(require("../controllers/Activity.controller"));
const router = (0, express_1.Router)();
const userController = new User_controller_1.default();
const activitycontroller = new Activity_controller_1.default();
const reqBodyMiddleware = new reqBodyValidate_middleware_1.default();
const userMiddleware = new user_middleware_1.default();
router.patch('/:id', reqBodyMiddleware.userUpdateBody.bind(reqBodyMiddleware), userMiddleware.validateNewUSer.bind(userMiddleware), userController.updateUser.bind(userController));
router.get('/:id', userController.listUsersById.bind(userController));
router.get('/', userController.listUsers.bind(userController));
router.post('/', reqBodyMiddleware.userBody.bind(reqBodyMiddleware), userMiddleware.validateNewUSer.bind(userMiddleware), userController.registerUser.bind(userController));
router.post('/:id/activity', reqBodyMiddleware.activityBody.bind(reqBodyMiddleware), activitycontroller.createActivity.bind(activitycontroller));
exports.default = router;
//# sourceMappingURL=user.routes.js.map