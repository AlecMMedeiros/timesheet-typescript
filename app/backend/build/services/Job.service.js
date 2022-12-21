"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { jobError } = require("../utils/errorMap.utils");
const JobModel_1 = __importDefault(require("../models/JobModel"));
const UserModel_1 = __importDefault(require("../models/UserModel"));
const UserJobModel_1 = __importDefault(require("../models/UserJobModel"));
const models_1 = __importDefault(require("../models"));
class JobServices {
    _job = JobModel_1.default;
    _userjob = UserJobModel_1.default;
    async fetchJobById(id) {
        try {
            const result = await this._job.findOne({
                where: { id },
                include: [{
                        model: UserModel_1.default,
                        as: 'users',
                        attributes: { exclude: ['password', 'id'] },
                        through: { attributes: [] }
                    }],
            });
            return { code: 200, object: result };
        }
        catch (error) {
            console.log(error);
            return { code: 400, message: 'Error' };
        }
    }
    ;
    async createJob(payload) {
        const { title, description, os, estimatedHours, userIds } = payload;
        const transaction = await models_1.default.transaction();
        try {
            const newJob = await this._job.create({ title, description, os, estimatedHours, status: 'Aguardando inicio' });
            const getchNewJob = await this._job.findByPk(newJob.null);
            const getJobId = getchNewJob.dataValues.id;
            await Promise.all(userIds.map(async (userId) => this._userjob.create({ userId, jobId: getJobId })));
            await transaction.commit();
            return { code: 201, object: getchNewJob };
        }
        catch (error) {
            console.log(error);
            await transaction.rollback();
            throw jobError.type04;
        }
    }
    async fetchJobs() {
        const transaction = await models_1.default.transaction();
        try {
            const fetch = await this._job.findAll({
                include: [{
                        model: UserModel_1.default,
                        as: 'users',
                        attributes: { exclude: ['password', 'id'] },
                        through: { attributes: [] }
                    }]
            });
            console.log(fetch);
            await transaction.commit();
            return { code: 200, object: fetch };
        }
        catch (error) {
            console.log(error);
            transaction.rollback();
            throw jobError.type04;
        }
    }
    ;
}
exports.default = JobServices;
//# sourceMappingURL=Job.service.js.map