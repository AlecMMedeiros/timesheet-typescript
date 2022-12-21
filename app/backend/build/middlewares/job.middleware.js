"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { jobError } = require('../utils/errorMap.utils');
const JobModel_1 = __importDefault(require("../models/JobModel"));
class JobMiddleware {
    _job = JobModel_1.default;
    async validateNewJob(req, res, next) {
        const { title } = req.body;
        const checkSameTitle = await this._job.findOne({ where: { title } });
        if (checkSameTitle) {
            return res.status(jobError.type02.code).json({ message: jobError.type02.message });
        }
        next();
    }
    ;
}
exports.default = JobMiddleware;
//# sourceMappingURL=job.middleware.js.map