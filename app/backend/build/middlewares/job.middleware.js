"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorMap_utils_1 = __importDefault(require("../utils/errorMap.utils"));
const JobModel_1 = __importDefault(require("../models/JobModel"));
const UserModel_1 = __importDefault(require("../models/UserModel"));
class JobMiddleware {
    _job = JobModel_1.default;
    _user = UserModel_1.default;
    _ErrorMap = new errorMap_utils_1.default();
    async validateNewJob(req, res, next) {
        const { title, userIds } = req.body;
        const checkSameTitle = await this._job.findOne({ where: { title } });
        const checkIds = await Promise.all(userIds.map(async (userid) => {
            const check = await this._user.findByPk(userid);
            if (check === null)
                return false;
        }));
        if (checkSameTitle) {
            return res.status(this._ErrorMap.jobError.type02.code).json({ message: this._ErrorMap.jobError.type02.message });
        }
        if (checkIds.includes(false)) {
            return res.status(this._ErrorMap.jobError.type03.code).json({ message: this._ErrorMap.jobError.type03.message });
        }
        next();
    }
    ;
}
exports.default = JobMiddleware;
//# sourceMappingURL=job.middleware.js.map