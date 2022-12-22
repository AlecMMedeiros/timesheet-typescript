"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Activity_service_1 = __importDefault(require("../services/Activity.service"));
class ActivityController {
    _activityservice = new Activity_service_1.default();
    async createActivity(req, res) {
        const { id } = req.params;
        const payload = { ...req.body, id };
        console.log(payload);
        const newActivity = await this._activityservice.createActivity(payload);
        return res.status(newActivity.code).json(newActivity.object);
    }
}
exports.default = ActivityController;
//# sourceMappingURL=Activity.controller.js.map