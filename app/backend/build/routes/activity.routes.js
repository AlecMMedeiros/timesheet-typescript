"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Activity_controller_1 = __importDefault(require("../controllers/Activity.controller"));
const router = express_1.default.Router();
const activitycontroller = new Activity_controller_1.default();
// router.post('/', activitycontroller.createActivity.bind(activitycontroller))
exports.default = router;
//# sourceMappingURL=activity.routes.js.map