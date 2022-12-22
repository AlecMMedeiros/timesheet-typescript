"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserActivityModel_1 = __importDefault(require("../models/UserActivityModel"));
const ActivityModel_1 = __importDefault(require("../models/ActivityModel"));
const models_1 = __importDefault(require("../models"));
const errorMap_utils_1 = __importDefault(require("../utils/errorMap.utils"));
class HourServices {
    _hour = ActivityModel_1.default;
    _userhour = UserActivityModel_1.default;
    _ErrorMap = new errorMap_utils_1.default();
    async createActivity(payload) {
        const { userId, ...withoutID } = payload;
        const transaction = await models_1.default.transaction();
        try {
            const newActivity = await this._hour.create(withoutID);
            const getNewActivity = await this._hour.findByPk(newActivity.null);
            const getHourId = getNewActivity.dataValues.id;
            this._userhour.create({ user_id: userId, hour_id: getHourId });
            await transaction.commit();
            return { code: 201, object: getNewActivity };
        }
        catch (error) {
            await transaction.rollback();
            throw this._ErrorMap.activityError.type04;
        }
    }
}
exports.default = HourServices;
//# sourceMappingURL=Hour.service.js.map