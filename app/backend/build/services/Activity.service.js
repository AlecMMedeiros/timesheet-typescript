"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("../models"));
const errorMap_utils_1 = __importDefault(require("../utils/errorMap.utils"));
const ActivityModel_1 = __importDefault(require("../models/ActivityModel"));
const UserActivityModel_1 = __importDefault(require("../models/UserActivityModel"));
class ActivityServices {
    _activity = ActivityModel_1.default;
    _useractivity = UserActivityModel_1.default;
    _ErrorMap;
    constructor() {
        this._ErrorMap = new errorMap_utils_1.default();
    }
    async createActivity(payload) {
        const { id, ...withoutID } = payload;
        const transaction = await models_1.default.transaction();
        try {
            const newActivity = await this._activity.create(withoutID);
            const getNewActivity = await this._activity.findByPk(newActivity.null);
            const getHourId = getNewActivity.dataValues.id;
            await this._useractivity.create({ user_id: id, activity_id: getHourId });
            await transaction.commit();
            return { code: 201, object: getNewActivity };
        }
        catch (error) {
            console.log(error);
            await transaction.rollback();
            throw this._ErrorMap.activityError.type04;
        }
    }
}
exports.default = ActivityServices;
//# sourceMappingURL=Activity.service.js.map